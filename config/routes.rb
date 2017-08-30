Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    # resources :nodes, only: [:show,:index]
    resources :nodes, only: [:show,:index] do
      # resources :children, only: [:index]
      get 'children', :on => :member
    end

  # get 'children', to: 'nodes#show_children'
  end

  root "static_pages#root"
end
