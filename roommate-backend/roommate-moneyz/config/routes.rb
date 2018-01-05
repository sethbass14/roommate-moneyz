Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :houses
      resources :users
      resources :bills
      delete 'payer', to: 'users#delete_payer_bill'
      patch 'paid', to: 'users#paid_bill'
    end
  end

end
