# MovieList App

App for reviewing movies. Review movies you have seen and see what other people thought about them.

[Link to the app](https://arkuar-movielist.herokuapp.com/)

## Documentation
[Work hour log](documentation/workhourlog.md)

[How to use](documentation/usage.md)

## Installing
- Clone the repo to your own machine with `git clone git@github.com:arkuar/movielist-app.git`
- Navigate to the project folder and run `npm install`

To ensure you have full access to all the features, you need to add `.env` file to your project. 

It should include atleast the following variables:
* `MONGODB_URI` specifying the MongoDB connection string to be used
* `SECRET` used in authentication to verify and sign the tokens
* `OMDB_API_KEY` API key that is used to fetch movies from OMDB API. You can get one from [here](https://www.omdbapi.com/apikey.aspx).

In addition to these, there are some optional variables that you can specify:
* `MONGODB_TEST` if you want to run the tests. It should be a connection string to the test database.
* `PORT` specifying the port where the application should be started. If not specified, the application defaults to port `8000`

You can check an example on how to specify these values from the `.env.example` file.

### Run in development
To start the app in development mode just run the command `npm run dev`

### Run in production
- Run `npm run build` which will build both the backend and frontend
- Run `npm start`

### Running tests
You can run the tests with the command `npm test`.

### Linting
Running command `npm run lint` will check the linting

### Populating database
If you need to populate database with some initial data you can run command `npm run seed`.




