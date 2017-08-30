class CreatePaths < ActiveRecord::Migration[5.0]
  def change
    create_table :paths do |t|

      t.timestamps
    end
  end
end
