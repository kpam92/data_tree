class CreateNodes < ActiveRecord::Migration[5.0]
  def change
    create_table :nodes do |t|
      t.string :path, null: false
      t.integer :parent_id
      t.timestamps
    end
    add_index :nodes, :id
    add_index :nodes, :session_token
  end
end
