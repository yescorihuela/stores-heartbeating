class DashboardController < ApplicationController
  def show
    @stores = Store.all
  end
end
