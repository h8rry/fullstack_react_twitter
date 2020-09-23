Rails.application.routes.draw do
  root to: "static_pages#home"
  get '/demo' => 'static_pages#demo'
  get '/feeds' => 'feeds#index'

  # USERS
  post '/users' => 'users#create'
  get '/users/:username/tweets' => 'tweets#index_by_user' 


  # SESSIONS
  post '/sessions' => 'sessions#create'
  get '/authenticated' => 'sessions#authenticated'
  delete '/sessions' => 'sessions#destroy'

  # TWEETS
  get 'tweets' => 'tweets#index'
  get '/tweets/search/:keyword' => 'tweets#search' 
  post '/tweets' => 'tweets#create'
  delete '/tweets/:id' => 'tweets#destroy'

  # Redirect all other paths to index page, which will be taken over by AngularJS
  get '*path'    => 'homepage#index'
end
