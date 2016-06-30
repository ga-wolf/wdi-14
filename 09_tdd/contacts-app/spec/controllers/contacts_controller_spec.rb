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
  describe "GET #new" do
    it "creates a new contact, saved as @contact" do
      get :new
      expect(assigns(:contact)).to be_a_new(Contact)
    end
    it "renders the contacts/new template" do
      # GET localhost:3000/contacts/new
      get :new
      expect(response).to render_template(:new)
    end
  end
  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new contact in the database" do
        expect {
          post :create, contact: attributes_for(:contact)
        }.to change(Contact, :count).by 1
      end
      it "redirects to contacts#show" do
        post :create, contact: attributes_for(:contact)
        expect(response).to redirect_to contact_path(assigns(:contact))
      end
    end
    context "with invalid attributes" do
      it "shouldn't save the contact in the database" do
        expect {
          post :create, contact: attributes_for(:contact, first_name: nil)
        }.not_to change(Contact, :count)
        # If we seen bad data to the create method
          # The Contact count should not change
      end
      it "should re-render the contacts/new template" do
        post :create, contact: attributes_for(:contact, first_name: nil)
        expect(response).to render_template :new
      end
    end
  end
  describe "GET #edit" do
    it "assigns an existing contact to @contact" do
      contact = create :contact
      get :edit, id: contact.id
      expect(assigns(:contact)).to eq(contact)
    end
    it "renders the edit template" do
      contact = create :contact
      get :edit, id: contact.id
      expect(response).to render_template(:edit)
    end
  end
  describe "PUT #update" do
    before :each do
      @c = create :contact, first_name: "Groucho", last_name: "Marx"
    end
    context "with valid attributes" do
      it "locates the correct contact" do
        put :update, id: @c.id, contact: attributes_for(:contact, first_name: "Gummo")
        expect(assigns(:contact)).to eq(@c)
      end
      it "change @contact's attributes" do
        put :update, id: @c.id, contact: attributes_for(:contact, first_name: "Gummo")
        @c.reload
        expect(@c.first_name).to eq("Gummo")
      end
      it "redirects to @contact's show page" do
        put :update, id: @c.id, contact: attributes_for(:contact)
        expect(response).to redirect_to @contact
      end
    end
    context "with invalid attributes" do
      it "locates the correct contact and does not update attributes" do
        put :update, id: @c.id, contact: attributes_for(:contact, first_name: nil)
        @c.reload
        expect(@c.first_name).to eq("Groucho")
      end
      it "re-render the edit template" do
        put :update, id: @c.id, contact: attributes_for(:contact, first_name: nil)
        expect(response).to render_template(:edit)
      end
    end
  end
  describe "DELETE #destroy" do
    before :each do
      @c = create :contact
    end
    it "deletes the contact" do
      expect {
        delete :destroy, id: @c.id
      }.to change(Contact, :count).by -1
    end
    it "redirect to the contacts/index" do
      delete :destroy, id: @c.id
      expect(response).to redirect_to contacts_path
    end
  end
  describe "GET #index - JSON" do
    it "should include all contacts as JSON" do
      contact = create :contact
      get :index, format: :json
      expect(response.body).to eq(Contact.all.to_json)
    end
  end
end
