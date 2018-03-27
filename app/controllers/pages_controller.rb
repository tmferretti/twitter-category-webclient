class PagesController < ApplicationController
	def index
		response = Unirest.get("http://localhost:3000/v1/categories")
		p response.body
	end
end
