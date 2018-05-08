class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
