# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Store.create([
  {
    name: "store_1",
    printer_name: "printer_1",
    webserver_name: "webserver_1",
    dbserver_name: "dbserver_1",
    address: "Merced 560"
  },
  {
    name: "store_2",
    printer_name: "printer_2",
    webserver_name: "webserver_2",
    dbserver_name: "dbserver_2",
    address: "Merced 318"
  },
])

