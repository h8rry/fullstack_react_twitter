Rails.application.routes.draw do
  root to: "static_pages#home"
  get '/feedpage' => 'static_pages#feedpage'
  get '/logout' => 'static_pages#logout'

  # Redirect all other paths to index page, which will be taken over by AngularJS
  #get '*path'    => "static_pages#home"

 namespace :api do

  # USERS
 post '/users' => 'users#create'
 get '/users/:username/tweets' => 'tweets#index_by_user' 

  # SESSIONS
 get '/authenticated' => 'sessions#authenticated'
 post '/sessions' => 'sessions#create'
 delete '/sessions' => 'sessions#destroy'
 delete '/logout' => 'sessions#destroy'

 # just testing 
 get '/logout' => 'sessions#destroy'
 #resources :sessions

  # TWEETS
 get 'tweets' => 'tweets#index'
 get '/tweets/search/:keyword' => 'tweets#search' 
 post '/tweets' => 'tweets#create'
 delete '/tweets/:id' => 'tweets#destroy'

  end
  
end

