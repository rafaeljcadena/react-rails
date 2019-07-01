class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.map{|u| {id: u.id, email: u.email} }, status: :ok
  end
end