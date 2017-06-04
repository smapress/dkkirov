set :environment, "development"
set :output, {error: 'log/cron_error_log.log', standard: 'log/cron_log.log'}

every 1.day, at: '07:20' do
  rake 'delete:old_events'
end
