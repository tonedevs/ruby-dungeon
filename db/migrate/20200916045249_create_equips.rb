class CreateEquips < ActiveRecord::Migration[6.0]
  def change
    create_table :equips do |t|
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
