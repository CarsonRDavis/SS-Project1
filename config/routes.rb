Rails.application.routes.draw do
  get 'say/filenames'
  get 'say/hello'
  get 'say/goodbye'
  root 'say#hello'
  get 'say/filesearch'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
