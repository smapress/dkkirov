Rails.application.routes.draw do
  constraints(host: /^www\.(?!cute\.)/i) do
    match '(*any)', via: :all, to: redirect { |params, request|
      URI.parse(request.url).tap { |uri| uri.host.sub!(/^www\./i, '') }.to_s
    }
  end
end
