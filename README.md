# MovieList App

App for reviewing movies. Review movies you have seen and see what other people thought about them.

## Documentation
[Work hour log](documentation/workhourlog.md)

## Installing
- Clone the repo to your own machine with `git clone git@github.com:arkuar/movielist-app.git`
- Navigate to the project folder and run `npm install`

To ensure you have full access to all the features, you need to add `.env` file to your project. You can check what env variables are required from the `.env.example` file.

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
If you need to populate database with some initial data you can run comman `npm run seed` which adds some users and movies to the database. This does not add any reviews though so you have to add them yourself.




