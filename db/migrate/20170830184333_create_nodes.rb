class CreateNodes < ActiveRecord::Migration[5.0]
  def change
    create_table :nodes do |t|
      t.string :path, null: false
      t.integer :parent_id
      t.timestamps
    end
  end
end
