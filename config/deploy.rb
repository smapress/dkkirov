# config valid only for current version of Capistrano

lock '3.8.1'

set :username, 'hosting_dkkirov'
set :application, 'dkkirov'
set :repo_url, 'git@github.com:smapress/dkkirov.git'
set :rails_env, 'production'
set :scm, :git
set :deploy_to, "/home/#{fetch(:username)}/#{fetch(:application)}"
set :log_level, :info

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/media'

set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

