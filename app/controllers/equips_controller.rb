class EquipsController < ApplicationController

  # GET /equips
  def index
    @equips = Equip.all

    render json: @equips
  end

  # GET /equips/1
  def show
    @equip = Equip.find(params[:id])
    render json: @equip
  end

  private
   
    # Only allow a trusted parameter "white list" through.
    def equip_params
      params.require(:equip).permit(:name, :description, :image)
    end
end
