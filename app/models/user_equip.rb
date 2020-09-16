class UserEquip < ApplicationRecord
  
  belongs_to :equipped_equip, class_name: 'Equip', foreign_key: :equip_id

end
