
class Node < ApplicationRecord
  has_many(:children,
  foreign_key: :parent_id,
  class_name: 'Node')

  def self.populate_child_count
    @Node.all.each do |node|
      node.child_count = node.children.length
      node.save
    end
  end
end
