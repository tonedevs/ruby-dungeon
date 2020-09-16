require 'test_helper'

class UserEquipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_equip = user_equips(:one)
  end

  test "should get index" do
    get user_equips_url, as: :json
    assert_response :success
  end

  test "should create user_equip" do
    assert_difference('UserEquip.count') do
      post user_equips_url, params: { user_equip: { equip_id: @user_equip.equip_id, is_equipped: @user_equip.is_equipped, user_id: @user_equip.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_equip" do
    get user_equip_url(@user_equip), as: :json
    assert_response :success
  end

  test "should update user_equip" do
    patch user_equip_url(@user_equip), params: { user_equip: { equip_id: @user_equip.equip_id, is_equipped: @user_equip.is_equipped, user_id: @user_equip.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_equip" do
    assert_difference('UserEquip.count', -1) do
      delete user_equip_url(@user_equip), as: :json
    end

    assert_response 204
  end
end
