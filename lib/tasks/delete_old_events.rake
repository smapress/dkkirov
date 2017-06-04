namespace :delete do
  desc 'Delete records older events'
  task old_events: :environment do
    CamaleonCms::CustomFieldsRelationship.where('custom_field_slug == ?', 'datatime_event').where('value < ?', Time.now).each do |model|
      CamaleonCms::Post.where(id: model[:objectid]).destroy_all
    end
  end
end
