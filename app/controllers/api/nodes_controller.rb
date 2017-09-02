require 'byebug'
class Api::NodesController < ApplicationController

  def index
    @nodes = Node.all
  end

  def show
    curr_search = params[:id].downcase
    @nodes = Node.where("path LIKE ? ", "%#{curr_search}%")
  end

  def node_path
    node = Node.find(params[:id])
    @results = [node.path]
    until node.parent_id.nil?
      node = node.parent
      @results.unshift(node.path)
    end

    # Next do the json builder for this, then a function for displaying this information'
    @results
  end

  def children
    @nodes = Node.find(params[:id]).children
  end
end

# Node.all.each do |node|
#   node.child_count = 0 if node.child_count.nil?
#   node.save
# end

# Node.all.each do |node|
#   child_node_count = (node.children.map(&:child_count).reduce(&:+)|| 0) + node.children.count
#   node.child_count = child_node_count
#   node.save
# end
