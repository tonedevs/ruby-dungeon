class UserEquip < ApplicationRecord
  
  belongs_to :user
  has_and_belongs_to_many :equips

  validates :equip_id, uniqueness: {scope: :user_id}

end