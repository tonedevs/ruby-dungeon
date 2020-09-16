require 'test_helper'

class EquipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @equip = equips(:one)
  end

  test "should get index" do
    get equips_url, as: :json
    assert_response :success
  end

  test "should create equip" do
    assert_difference('Equip.count') do
      post equips_url, params: { equip: { description: @equip.description, image: @equip.image, name: @equip.name } }, as: :json
    end

    assert_response 201
  end

  test "should show equip" do
    get equip_url(@equip), as: :json
    assert_response :success
  end

  test "should update equip" do
    patch equip_url(@equip), params: { equip: { description: @equip.description, image: @equip.image, name: @equip.name } }, as: :json
    assert_response 200
  end

  test "should destroy equip" do
    assert_difference('Equip.count', -1) do
      delete equip_url(@equip), as: :json
    end

    assert_response 204
  end
end
