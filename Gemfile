source 'http://rubygems.org'

gem 'rails', '4.2.5.1'
gem 'sqlite3'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'puma', '~> 3.0'

group :development do
  gem 'capistrano', '~> 3.6'
  gem 'capistrano-rails', '~> 1.2'
  gem 'capistrano-bundler', '~> 1.2'
  gem 'capistrano-ssh-doctor', '~> 1.0'
  gem 'capistrano-puma'
end

group :assets do
  gem 'coffee-rails', '~> 4.1.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'sass-rails', '~> 5.0'
  gem 'haml', '~> 4.0.6'
  gem 'haml-rails', '~> 0.9'
  gem 'handlebars_assets'
  gem 'hamlbars', '~> 2.1'
end

group :development, :test do
  gem 'byebug'
end

group :development do
  gem 'erb2haml'
  gem 'web-console', '~> 2.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'camaleon_cms', '~> 2.4'
gem 'camaleon_ecommerce', '>= 2.0.0'
gem 'camaleon_post_order', github: 'owen2345/camaleon-post-order-plugin'


#################### Camaleon CMS include all gems for plugins and themes #################### 
require './lib/plugin_routes' 
instance_eval(PluginRoutes.draw_gems)