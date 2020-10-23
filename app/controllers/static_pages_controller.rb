class StaticPagesController < ApplicationController
    def home
      render 'home'
    end

    def demo
      render 'demo'
    end

    def logout
      render 'logout'
    end

    def myfeeds
      render 'myfeeds'
    end 
  end