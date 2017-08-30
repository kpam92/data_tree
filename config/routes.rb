Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :nodes, only: [:show, :index]
  end

  root "static_pages#root"
end
