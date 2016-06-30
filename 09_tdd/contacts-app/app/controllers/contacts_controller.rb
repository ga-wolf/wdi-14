class ContactsController < ApplicationController
  def index
    if params[:letter]
      @contacts = Contact.by_letter params[:letter]
    else
      @contacts = Contact.all
    end
  end
  def show
    # @contact == assigns(:contact)
    @contact = Contact.find params[:id]
  end
end
