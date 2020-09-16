class Equip < ApplicationRecord
has_many :users, through: :user_equips

end
