Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :houses
      resources :users
      resources :bills
    end
  end
end
