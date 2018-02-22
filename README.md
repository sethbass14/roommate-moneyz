# roommate-moneyz

Roommate-moneyz is a bill splitting app for common apartment dwellers to keep track of household bills. The app manages shared expenses such as rent, utilities, groceries, and whatever other expenses that require a shared burden. By keeping track of original payer of the bill, the app manages all of the money that you are owed by your roommates and the money that you owe to your other roommates. Inspired by Splitwise. Currently, this app is a demo with a hardcoded user.

## Getting Started

### Backend

Located in `roommate-backend/roommate-moneyz`, the backend is a Rails directory that serves a JSON API.

1. Fork and Clone this repo.
2. In your terminal navigate to `roommate-backend/roommate-moneyz`
3. Run `bundle install`
4. Run `rails db:migrate` to set up database
5. Run `rails server` to fire up the server

### Frontend

Located in `roommate-frontend`, the frontend manipulates the DOM with vanilla JavaScript. 

1. In your terminal navigate to `roommate-frontend`
2. Run `open index.html`
3. The app will be hosted on localhost. Check it out!

## Authors

* Connie Wang @c0nniewang
* Eric Li @lierica
* Seth Barden @sethbass14

## Built With

* Rails
* Postgres
* JavaScript
