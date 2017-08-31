class ChangeNodesTable < ActiveRecord::Migration[5.0]
  def change
    add_column :nodes, :child_count, :integer
    add_index :nodes, :parent_id
  end
end
