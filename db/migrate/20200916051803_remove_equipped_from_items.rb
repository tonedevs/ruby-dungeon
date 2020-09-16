class RemoveEquippedFromItems < ActiveRecord::Migration[6.0]
  def change
    remove_column :items, :equipped, :boolean
  end
end
