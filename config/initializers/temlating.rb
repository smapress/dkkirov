require 'handlebars_assets'

Sprockets::Environment.new.append_path HandlebarsAssets.path

::HandlebarsAssets.configure do |config|
  config.haml_enabled = false
  config.hamlbars_extensions = []
end

def handlebars_extensions
  @hbs_extensions ||= ['.hbs', 'handlebars']
end
