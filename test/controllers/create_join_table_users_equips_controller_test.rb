require 'test_helper'

class CreateJoinTableUsersEquipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @create_join_table_users_equip = create_join_table_users_equips(:one)
  end

  test "should get index" do
    get create_join_table_users_equips_url, as: :json
    assert_response :success
  end

  test "should create create_join_table_users_equip" do
    assert_difference('CreateJoinTableUsersEquip.count') do
      post create_join_table_users_equips_url, params: { create_join_table_users_equip: { equip_id: @create_join_table_users_equip.equip_id, is_equipped: @create_join_table_users_equip.is_equipped, user_id: @create_join_table_users_equip.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show create_join_table_users_equip" do
    get create_join_table_users_equip_url(@create_join_table_users_equip), as: :json
    assert_response :success
  end

  test "should update create_join_table_users_equip" do
    patch create_join_table_users_equip_url(@create_join_table_users_equip), params: { create_join_table_users_equip: { equip_id: @create_join_table_users_equip.equip_id, is_equipped: @create_join_table_users_equip.is_equipped, user_id: @create_join_table_users_equip.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy create_join_table_users_equip" do
    assert_difference('CreateJoinTableUsersEquip.count', -1) do
      delete create_join_table_users_equip_url(@create_join_table_users_equip), as: :json
    end

    assert_response 204
  end
end
