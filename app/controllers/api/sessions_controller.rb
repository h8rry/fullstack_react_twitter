module Api
class SessionsController < ApplicationController
    def create
      @user = User.find_by(username: params[:user][:username])
  
    # if @user and @user.password == params[:user][:password]
      if @user and BCrypt::Password.new(@user.password) == params[:user][:password]
        session = @user.sessions.create
        cookies.permanent.signed[:twitter_session_token] = {
          value: session.token,
          httponly: true
        }
  
        render json: {
          #success: true
          render './views/api/sessions/create', status: :created
        }
      else
        render json: {
          #success: false
          render json: { success: false }, status: :bad_request
        }
      end
    end


    def authenticated
        token = cookies.signed[:twitter_session_token]
        session = Session.find_by(token: token)
    
        if session
          user = session.user
          render './views/api/sessions/authenticated', status: :ok
        else
          render json: { authenticated: false }, status: :bad_request
        end
      end

      def destroy
        token = cookies.signed[:twitter_session_token]
        session = Session.find_by(token: token)
        if session and session.destroy
          render json: { success: true }, status: :ok
        end
      end

  end
end