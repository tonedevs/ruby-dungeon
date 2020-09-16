class UserEquipsController < ApplicationController
  before_action :authorize_request
  before_action :set_user_equip, only: [:show, :update, :destroy, :equip_equipment]

  # GET /user_equips
  def index
    @user_equips = current_user.user_equips.all

    render json: @user_equips
  end

  # GET /user_equips/1
  def show
    render json: @user_equip
  end

  # POST /user_equips
  def create
    @user_equip = UserEquip.new(user_equip_params)
    @user_equip.user = current_user

    if @user_equip.save
      render json: @user_equip, status: :created
    else
      render json: @user_equip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_equips/1
  def update
    if @user_equip.update(user_equip_params)
      render json: @user_equip
    else
      render json: @user_equip.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_equip
      @user_equip = current_user.user_equips.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_equip_params
      params.require(:user_equip).permit(:equip_id, :is_equipped)
    end

end
