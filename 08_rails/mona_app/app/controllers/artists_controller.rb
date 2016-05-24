class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params

    redirect_to "/artists/#{artist.id}"
  end


  private

    def artist_params
      params.require(:artist).permit(:name, :image, :dob, :nationality, :period)
    end

end
