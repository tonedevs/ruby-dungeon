class CreateTable < ActiveRecord::Migration[6.0]
  def change
    create_table :tables do |t|
      t.string :Item
      t.user_items :references
    end
  end
end
