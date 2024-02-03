# Haven

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone this repo via `git clone git@github.com:kmiller9393/haven.git` to your local machine.

Second, `cd` into your recently cloned `/haven` directory from the step above and run `npm i` or `yarn` based on which package manager you use.

Now you should be able to run this app locally via one the options below:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## Haven

Booking.com clone using Next.js v14 and Oxylabs web scraping functionality. Users have the ability to select their desired travel location, travel dates, number of travelers and number of rooms on the landing page (see below).

![Landing Image](/public/landing.png)

After submitting this information mentioned above on the landing page, users are directed to the search page where the are given a list of travel options to choose from. When they select a travel option from this list, they are directed to the actual Booking.com page associated with that listing.

#### Loading State:

![Loading Image](/public/skeleton.png)

#### After results are fetched:

![Results Image](/public/results.png)

#### After clicking on an individual result:

![Booking.com Image](/public/booking.png)
