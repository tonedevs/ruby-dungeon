require 'test_helper'

class UserItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_item = user_items(:one)
  end

  test "should get index" do
    get user_items_url, as: :json
    assert_response :success
  end

  test "should create user_item" do
    assert_difference('UserItem.count') do
      post user_items_url, params: { user_item: { equipped: @user_item.equipped, item_id: @user_item.item_id, user_id: @user_item.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_item" do
    get user_item_url(@user_item), as: :json
    assert_response :success
  end

  test "should update user_item" do
    patch user_item_url(@user_item), params: { user_item: { equipped: @user_item.equipped, item_id: @user_item.item_id, user_id: @user_item.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_item" do
    assert_difference('UserItem.count', -1) do
      delete user_item_url(@user_item), as: :json
    end

    assert_response 204
  end
end
