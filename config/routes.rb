Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'statics#index'

  namespace :api, defaults: { format: :json }, path: '/api' do
    namespace :v1 do
      resources :users, only: :index
    end
  end
end
