# DataTree

[DataTree Live][host]

[host]: http://data-tree.herokuapp.com


DataTree is a small full-stack web application with Ruby on Rails in the backend with a PostgreSQL database, and JavaScript with React on the frontend. This application consists of data scraped from ImageNet (http://imagenet.stanford.edu/), parsed into a database, then displayed for the user.

<a href="http://data-tree.herokuapp.com">
  <img src="https://raw.githubusercontent.com/kpam92/data_tree/master/app/assets/images/screenshot.png"/>
</a>

## Features & Implementation

### 1. Data Scraping

All data is scraped from the ImageNet tree dataset. The tree consists of a dynamic React component that opens up all children of table elements when clicked. My objective was to scrape the contents of all data names, and include their parents and path, seperated by `>`. Expected output is shown below:

```
[
    {name: 'ImageNet 2011 Fall Release', size: 32326},
    {name: 'ImageNet 2011 Fall Release > plant, flora, plant life', size: 4486},
    {name: 'ImageNet 2011 Fall Release > plant, flora, plant life > phytoplankton', size: 2},
    {name: 'ImageNet 2011 Fall Release > plant, flora, plant life > phytoplankton > planktonic algae', size: 0},
    {name: 'ImageNet 2011 Fall Release > plant, flora, plant life > phytoplankton > diatom', size: 0},
    {name: 'ImageNet 2011 Fall Release > plant, flora, plant life > microflora', size: 0},
    ...
]
```

Because all of a parent's children in this data doesn't exist on the page until being clicked, back-end snapshot scraping with Nokogiri only gave back the `ImageNet 2011 Fall Release` name. So, in order to retrieve the information, within the DOM console, I created a method that triggered all of the click event listeners of elements containing the `jstree-closed` class, seen below:

```javascript
var base = document.getElementById('tree');
var closedTree = base.getElementsByClassName('jstree-closed');
while (closed.length !== 0) {

  Array.prototype.forEach.call(closedTree, function(el) {
      el.children[0].click()
  });
  closedTree = base.getElementsByClassName('jstree-closed')
}
```

After opening all of the contents, I created a DFS function that iterated over all the elements in the tree, creating new objects with their classes in addition to their ancestor path found in a recursive manner. All data saved within the `results` array was then stringified to easily move to the application's database.

```javascript
  var results = [];

  //root element of tree
  var root = document.getElementById(82127);

  //function takes in inital UL
  function traverseTreeUd(element, currClass) {
    Array.prototype.forEach.call(element.children, function(child) {
      if (child.tagName == 'LI') {
        traverseTreeLi(child,currClass);
      }
    });
  }

  // function that takes the LI
  function traverseTreeLi(element, currClass = '') {
    Array.prototype.forEach.call(element.children, function(child) {
      if (child.tagName == 'A') {
        let currText = child.text;
        currText = currText.split(" (");
        addedClass = currText[0];
        let newClass = `${currClass} > ${addedClass}`
        let currChildren = parseInt(currText[1]);
        results.push({name: newClass, children: currChildren})
      } else if (child.tagName == "UL") {
        traverseTreeUd(child, `${currClass} > ${addedClass}`)
      }
    });
  }

  traverseTreeUd(root, currClass);
  JSON.stringify(results);
```

### 2. Storing data in Database

Now that we have collected the stringified JSON data, the next step is parsing the information into the database. Within the seed file in my rails application, I completed this with a Trie data structure, where I iterated through each object name, split them by `>`, i.e., `ImageNet 2011 Fall Release > plant, flora, plant life`, turned into `["ImageNet 2011 Fall Release,plant", "flora, plant life"]`. From there, we iterate through the names in the path, moving through existing nodes that contain parent classes. If the node for that pathname doesn't exist, we create it, and add a parent child relationship through `author_id`.

```ruby
sample_data = "[{...all the collected json...}]"
sample_data = JSON.parse(sample_data)

sample_data.each do |data|
  paths   = data["name"].split(" > ")
  children = data["size"]

  parent = nil
  idx = 0

  while idx < paths.length
    curr_path = paths[idx]
    until curr_path[0] != ' '
      curr_path = curr_path[1..-1]
    end
    curr_node = Node.find_by_path(curr_path)

    if curr_node.nil?
      curr_node = Node.new
      curr_node.path = curr_path
      curr_node.parent_id = parent.id unless parent.nil?
      curr_node.child_count = children
      curr_node.save
    end

    parent = curr_node
    idx += 1
  end

end
```

### 3. Creating a Tree Heirarchy

Next, we'll convert it back to a tree. Rails makes this easy through the `:has_many, :belongs_to` relationships you can create in models. And by indexing the `author_id` foreign key, we can find these relations even faster in O(log(n)).
```Ruby
class Node < ApplicationRecord
  has_many(:children,
  foreign_key: :parent_id,
  class_name: 'Node')
end
```
This is syntactic sugar for the equation below
```
node.children # an array of the children of a node
# => SELECT
#      nodes.*
#    FROM
#      nodes
#    WHERE
#      nodes.author_id = ?
#
# The `?` is filled with `node.id`.
```


I created a custom member route, `/api/nodes/:id/children`, that then finds and returns the child nodes of the node of that `params[:id]`.

```Ruby
def children
  @nodes = Node.find(params[:id]).children
end
```
These parts above create a structure like that below:

```
{
    name: 'ImageNet 2011 Fall Release',
    size: 32326,
    children: [
        {
            name: 'plant, flora, plant life',
            size: 4486,
            children: [
                {
                    name: 'phytoplankton',
                    size: 2,
                    children: [
                        ...
                    ]
                },
                ...
            ]
        },
        ...
    ]
}
```

### 4. Visualizing for the User

With over 30,000 nodes in our database, React is a good manner to display the data, because of its easy method of reusing class components, and by integrating clicking event listeners, we will be able to only grab necessary data from the backend to display for the user efficiently. There are two main components, the `Tree` component that holds the initial `ul`, and the `Node` component that stores the individual nodes themselves. Upon clicking a node with children, this triggers a new `Tree` > `Node` element.

### 5. Searching through the Tree

The search component queries the database and returns matching elements. When an element is clicked, this triggers a an action that makes an api call to a custom `path` route, `/api/nodes/:id/path`. This returns an array of the path to this element and stores it in the node's `curr_node_path` state. Each node component is attached to the path state, and when props are updated, each node within the path opens up until the selected element is revealed and highlighted.

## Future Directions for the Project

I plan to add small adjustments to the project to provide better UX/UI for the user

### Styling

I plan to keep styling the application interface for better design.
