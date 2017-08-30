class CreatePaths < ActiveRecord::Migration[5.0]
  def change
    create_table :paths do |t|
      t.string :curr_path, null: false
      t.integer :children, null: false
      t.timestamps
    end
  end
end
