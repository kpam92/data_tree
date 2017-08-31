class ChangeNodesTable < ActiveRecord::Migration[5.0]
  def change
    add_column :nodes, :child_count, :integer
  end
end
