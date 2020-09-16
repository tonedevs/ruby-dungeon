class User < ApplicationRecord
  has_secure_password
  has_many :items
  has_many :equips, through: :user_equips

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 4 }
end
