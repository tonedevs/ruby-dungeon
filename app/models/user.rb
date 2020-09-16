class User < ApplicationRecord
  has_secure_password
  has_many :items
  has_many :user_equips
  has_many :equipped_equips, through: :user_equips

  def all_equips
    equips + equipped_equips
  end 

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 4 }
end