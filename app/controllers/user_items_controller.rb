class UserItemsController < ApplicationController
  before_action :set_user_item, only: [:show, :update, :destroy]

  # GET /user_items
  def index
    @user_items = UserItem.all

    render json: @user_items
  end

  # GET /user_items/1
  def show
    render json: @user_item
  end

  # POST /user_items
  def create
    @user_item = UserItem.new(user_item_params)

    if @user_item.save
      render json: @user_item, status: :created, location: @user_item
    else
      render json: @user_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_items/1
  def update
    if @user_item.update(user_item_params)
      render json: @user_item
    else
      render json: @user_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_items/1
  def destroy
    @user_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_item
      @user_item = UserItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_item_params
      params.require(:user_item).permit(:user_id, :item_id, :equipped)
    end
end
