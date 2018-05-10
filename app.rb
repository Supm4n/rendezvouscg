require 'sinatra/base'
require 'net/http'
require 'uri'
require 'json'



class MyApp < Sinatra::Base
  require './helpers'

  get '/' do
  	erb :index
  end

	post '/members' do 
		uri = URI.parse("https://us8.api.mailchimp.com/3.0/lists/733f7cd62b/members")
		header = {:authorization => 'Basic supm4n:c87827bee369c5cc52bd5b5dec8d2b7c-us8'}

		http = Net::HTTP.new(uri.host, uri.port)
		my_request = Net::HTTP::Post.new(uri.request_uri, header)

		content_type :json

		data = {:email_address => params[:email], status => "subscribed"}
		
		my_request.body = data.to_json

		response = http.request(my_request)

		if response.code == "200"
				{:status => 'OK'}.to_json
		else
				JSON.parse(response.body)
		end

	end

  run! if app_file == $0
end
