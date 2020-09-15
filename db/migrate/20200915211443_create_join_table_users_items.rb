class CreateJoinTableUsersItems < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :items do |t|
      t.boolean :equipped
      # t.index [:user_id, :item_id]
      # t.index [:item_id, :user_id]
    end
  end
end
