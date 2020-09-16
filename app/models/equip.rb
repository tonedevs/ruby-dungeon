class Equip < ApplicationRecord

has_many  :user_equips

validates :name, uniqueness: true

end