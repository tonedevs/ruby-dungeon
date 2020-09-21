class UserEquipsController < ApplicationController
  before_action :set_user_equip, only: [:show, :update]
  
  # GET /users/1/user_equips
  def index
      @user = User.find(params[:user_id])
     render json: @user.user_equips
  end

  # GET /user_equips/1
  def show
    render json: @user_equip
  end

  # POST /user_equips
  def create
    @user_equip = UserEquip.new(user_equip_params)

    if @user_equip.save
      render json: @user_equip, status: :created
    else
      render json: @user_equip.errors, status: :unprocessable_entity
    end
  end

  # PUT /user_equips/1
  def update
    if @user_equip.update(user_equip_params)
      render json: @user_equip
    else
      render json: @user_equip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1/userequips
  def destroy
    @user = User.find(params[:user_id])
    @user.user_equips.destroy_all

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_equip
      @user_equip = UserEquip.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_equip_params
      params.require(:user_equip).permit(:equip_id, :user_id, :is_equipped)
    end

end
