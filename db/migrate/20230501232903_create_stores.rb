class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :printer_name
      t.string :webserver_name
      t.string :dbserver_name
      t.text :address
      t.timestamps
    end
  end
end
