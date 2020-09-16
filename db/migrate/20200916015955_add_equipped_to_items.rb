class AddEquippedToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :equipped, :boolean
  end
end
