# Basic Rails Application

- ` rails new mona_app `
- ` cd mona_app `
- Add gems into development group in the Gemfile
  - ` gem 'pry-rails' `
  - ` bundle ` or ` bundle install `
- New pane - CMND + D
- ` rails s ` or ` rails server `

---

## Time for CRUD stuff

- Draw out the database
  - Associations (crows feet)
  - Columns and types
  - Make sure to include timestamps!

- If you want the database to start with things...
  - Make your models - ` rails generate model Artist `
  - Add code into your seeds - making sure to add ` Artist.destroy_all `
  - ` rake db:seed `

- Repeat as necessary
  - add ` resources :artists ` - config/routes.rb
  - visit http://localhost:3000/rails/info/routes
  - **Start with READ steps - EDD**
    - Controllers
      - ` def index; @artists = Artist.all; end; `
      - ` rails generate model Artist --skip ` - terminal
        - Fill in the migration file with everything that is necessary
        - ` rake db:migrate ` - terminal
        - Look at db/schema.rb to make sure it worked
    - Views
      - ` mkdir app/views/artists `
      - ` touch app/views/index.html.erb `
      - Write whatever is necessary (typically that is an each loop for the index page - make sure to link to the show page from here!)
    - Controllers
      - ` def show; @artist = Artist.find params[:id]; end; `
    - Views
      - ` touch app/views/show.html.erb `
      - Write whatever is necessary (show all the details). This page typically includes links for the edit and delete
        - ` <%= link_to( "Edit Artist", "/artists/:id/edit" ) %> `
        - ` <%= link_to( "Delete Artist", artist, :method => :delete, :data => {  :confirm => "Are you sure?" } ) %> `
  - **EDIT - EDD**
    - Controllers
      - ` def edit; @artists = Artist.find params[:id]; end; `
      - ` def update; artist = Artist.find params[:id] ; artist.update artist_params; redirect_to artist; end; `
      - Create my strong params method - ` params.require(:artist).permit(:name, :title, ...) `
    - Views
      - Create and fill your partial (add all necessary fields) - ` touch app/views/artists/_form.html.erb `
      - Call it in your edit.html.erb - ` <%= render :partial => 'form' %> `
  - **CREATE - EDD**
    - Controllers
      - ` def new; @artists = Artist.new; end; `
      - ` def create; artist = Artist.create artist_params; redirect_to artist; end; `
    - Views
      - Call the partial in your new.html.erb - ` <%= render :partial => 'form' %> `
  - **DELETE - EDD**
    - Controllers
      - ` def destroy; artist = Artist.find params[:id]; artist.destroy; redirect_to artists_path; end; `

- Work on your associations
  - has_many and belongs_to, for these to work:
    - Add our associations to the models
      - ` class Artist < ActiveRecord::Base; has_many :works; end; `
      - ` class Work < ActiveRecord::Base; belongs_to :artist; end; `
    - Make sure that the model that belongs_to the other model has a foreign key (work having artist_id) - this should be stored as an integer. If it doesn't:
      - ` rails generate migration add_artist_id_to_works `
      - Fill in that migration
      - ` rake db:migrate `
  - Test associations in the console - ` rails c ` or ` rails console `
    - Add the association
      - ` w = Work.first `
      - ` w.artist_id = Artist.first.id `
      - ` w.save `
    - Run the association
      - ` Artist.first.works `
      - ` Work.first.artist `

- Start showing the associations in the views
  - ` <%= link_to work.artist.name, work.artist %> `
  - ```
    <% @artist.works.each do |work| %>
      <%= link_to work.title, work %>
    <% end %>
    ```

---

## Common Commands

- ` rails new some_app_name `
- ` rake db:create `
- ` rake db:migrate `
- ` rake db:seed `
- ` rake db:rollback ` - undo one migration
  - Change the file
  - ` rake db:migrate `
- ` rails generate migration create_artists `
  - Fill in the migration
  - ` rake db:migrate `
- ` rails generate model Artist `  
  - Fill in the migration
  - ` rake db:migrate `
- ` rails server ` or ` rails s `, ` rails server -p 3001 `
- ` rails console ` or ` rails c `
- ` rails db `
