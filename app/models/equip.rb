class Equip < ApplicationRecord
has_many :users, through: :user_equips

validates :name, uniqueness: true

end