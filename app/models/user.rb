class User < ApplicationRecord

  has_many :items
  has_many :user_equips
  has_many :equips, through: :user_equips

  validates :username, presence: true, uniqueness: true
end