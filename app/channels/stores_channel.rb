class StoresChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    stream_from "stores_status"
    params[:store][:time] = Time.now.strftime("%H:%M:%S - %d/%m/%Y")
    ActionCable.server.broadcast("stores_status", params[:store])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
