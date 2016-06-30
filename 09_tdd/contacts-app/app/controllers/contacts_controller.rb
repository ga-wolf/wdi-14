class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end
  def show
    # @contact == assigns(:contact)
    @contact = Contact.find params[:id]
  end
end
