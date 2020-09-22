# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

equipment = {
  sword: {
    name: 'Debugger',
    description: 'Though some may prefer a more angular weapon, this lightweight and versatile blade is modularized for a more agile react time.',
    image: 'https://raw.githubusercontent.com/ajmonda/ruby-dungeon/master/client/src/assets/images/swordEquipped.png'
  },
  helmet: {
    name: 'Headphones',
    description: "Bolster your resolve and drown out the siren's call of resignation and fatigue with weird techno music.",
    image: 'https://raw.githubusercontent.com/ajmonda/ruby-dungeon/master/client/src/assets/images/helmetEquipped.png'
  },
  shield: {
    name: 'Coarse Shield',
    description: 'Always manages to get in the way. Its origin is a complete mystery.',
    image: 'https://raw.githubusercontent.com/ajmonda/ruby-dungeon/master/client/src/assets/images/shieldEquipped.png'
  },
  spellbook: {
    name: 'The Documentation',
    description: 'A holy tome of powerful spells, if anyone would actually bother to read it. Use its effects wisely.',
    image: 'https://raw.githubusercontent.com/ajmonda/ruby-dungeon/master/client/src/assets/images/bookEquipped.png'
  }
}

# 
UserEquip.destroy_all
Equip.destroy_all
User.destroy_all

# admin = User.create!(username: 'admin', password: 'test')
# user1 = User.create!(username: 'user1', password: 'test')
# puts "#{User.count} users created"

equipment.each do | key, value |
  Equip.create!(value)
end
puts "#{Equip.count} equipment created"

# UserEquip.create!(user_id: 1, equip_id: 2, is_equipped: true)
# UserEquip.create!(user_id: 1, equip_id: 1, is_equipped: false)
# UserEquip.create!(user_id: 2, equip_id: 2, is_equipped: false)
# puts "#{UserEquip.count} joins created"


# torch = Item.create(user: admin, name: 'Torch', description: 'Fairly cheap light source with little risk of burning down your entire town.', image: 'https://i.imgur.com/uqt67XE.png', equipped: false)