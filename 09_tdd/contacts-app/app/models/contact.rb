# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ActiveRecord::Base
  has_many :phones

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  # c = Contact.first
  # c.name
  def name
    [first_name, last_name].join " "
  end

  # Contact.by_letter "J"
  def self.by_letter letter
    where("last_name LIKE ?", "#{letter}%").order(:last_name)
  end
end
