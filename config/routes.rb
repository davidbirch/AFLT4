AFLT4::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:index, :show]
      resources :raw_tweets, only: [:index, :show]
      resources :users, only: [:index, :show]
    end
  end
  root "pages#home"
end
