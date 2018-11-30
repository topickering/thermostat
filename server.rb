require 'sinatra'
require 'pg'

get '/update' do
  headers 'Access-Control-Allow-Origin' => '*'
  retrieve_state.to_json
end

post '/states' do
  headers 'Access-Control-Allow-Origin' => '*'
  store_state(temp: params[:temp])
  redirect '/update'
end

def store_state(temp:)
 connection = PG.connect(dbname: 'thermostat')
 connection.exec("TRUNCATE TABLE states;")
 connection.exec("INSERT INTO states (temp) VALUES(#{temp});")
end

def retrieve_state
  connection = PG.connect(dbname: 'thermostat')
  result = connection.exec("SELECT temp FROM states;")
  result[0]
end
