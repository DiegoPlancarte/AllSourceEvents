class Vendor < ApplicationRecord
  validates_presence_of :name, :category, :city, :zip, :description, :phone, :email
  belongs_to :user
end
