class UserEquip < ApplicationRecord
  belongs_to :user
  belongs_to :equips
end
