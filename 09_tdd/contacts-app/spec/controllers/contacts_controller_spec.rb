require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  describe "GET #index" do
    context "with params[:letter]" do
      it "populates an array of relevant users and store it in @contacts" do
        johns = create :contact, last_name: "Johns"
        jones = create :contact, last_name: "Jones"
        smith = create :contact, last_name: "Smith"

        get :index, letter: 'J'

        expect(assigns(:contacts)).to eq([johns, jones])
      end
      it "renders the contacts/index template" do
        get :index
        expect(response).to render_template(:index)
      end
    end
    context "without params[:letter]" do
      it "assigns all contacts to @contacts" do
        contact = create :contact
        contact_two = create :contact
        get :index
        expect(assigns(:contacts)).to match_array([contact, contact_two])
        expect(assigns(:contacts)).to eq(Contact.all)
      end
      it "renders the contacts/index template" do
        get :index
        expect(response).to render_template(:index)
      end
    end
  end
  describe "GET #show" do
    it "assigns the requested contact to @contact" do
      contact = create :contact
      # We can add params to a request
        # params[:id] = contact.id
      get :show, id: contact.id
      # We can ask whether instance variables were defined
      expect( assigns(:contact) ).to eq(contact)
    end
    it "renders the contacts/show template" do
      contact = create :contact
      # localhost:3000/contacts/:id
      get :show, id: contact.id
      expect(response).to render_template(:show)
    end
  end
end
