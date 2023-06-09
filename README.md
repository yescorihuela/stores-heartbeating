# README

After clone this repo in your local machine, please execute the next instructions as shown below:
**NOTE**: execute these instructions before run the project.
```
1. git submodule update
2. cd client-stores/
3. npm install
```

In order to run successfully this project, please execute the instructions as shown below:

```bash
  1. make run-backend # for run the server in one terminal
  2. rake db:create
  3. rake db:migrate
  4. rake db:seed # to create a two example stores
  5. make run-client # for run the client in other terminal
```

In your browser go to route ```http://localhost:3000/dashboard``` to visualize the dashboard with two stores.

In a second tab, go to route ```http://127.0.0.1:5173```, this is a blank view but it's the execution of websockets in the client (it's a vite project).

The **CRUD starts** on the route: ```http://localhost:3000/stores/```

Several considerations over the development of this app:

1. We're using here the "push" heartbeating method to check all services (and devices), borrowed from microservice architecture approach on which every microservice is sending its own status to registry.

2. There are two approaches to develop the structure of this app:
   - Using **ActionCable** approach, available in Rails since the version 5, we can simulate the printer, the webserver and the database server as one-to-one conversation with the server (which is working like microservices registry).
   - The second approach is **RESTful** which has been examinated generating heartbeats through cronjobs which sends requests to HTTP endpoints with each device status as payload, it's a straighforward approach. Every param will be into the URL: /restaurants/1/device_type/printer/1.

3. If you want increase or decrease the time of sending requests through websockets, please go to this [line](https://github.com/yescorihuela/client-stores/blob/20dce73a8e3aeffd1edf2caab7908ad1f75e1cd7/main.js#L64)

4. In you want to run/rollback the reversible migration, you can do it by:
  ```bash
    rake db:migrate # it will execute the migration or all the pending
    rake db:rollback STEP=1 # VERY IMPORTANT STEP=n means that you would run just 1 step or 2 if you want to check step by step the executed migrations
  ```
Remember you've run the last ```rake db:migrate``` at first time, it has run all the migrations, in this case you could rollback it to see the change has occurred.