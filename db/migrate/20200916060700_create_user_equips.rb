class CreateUserEquips < ActiveRecord::Migration[6.0]
  def change
    create_table :user_equips do |t|
      t.references :user, null: false, foreign_key: true
      t.references :equip, null: false, foreign_key: true
      t.boolean :is_equipped

      t.timestamps
    end
  end
end
