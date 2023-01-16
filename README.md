# Guess Your Nationality

## Description

This project is a take-home assignment for AggieWorks! It is a small React app that takes in a name as input, and uses the api.nationalize.io API to infer the user's nationality based on their name. The inferred nationality is then displayed, along with the country's flag. Most of the state management and logic is handled in the main App component, ideally I would TRY to avoid it but it suffices for this project.

## Tech Stack

- React
- Typescript
- CSS
- APIs from [Nationalize.io](https://nationalize.io/) and [REST Countries](https://restcountries.com/)

## Setup

### Prerequisites

- Node.js
- Vite (recommended)

### Running the app locally

1. Clone the repository and then install dependencies
```sh
git clone https://github.com/YOUR-USERNAME/guess-your-nationality
npm install
```

2. Start Development Server
```sh
npm run dev
```

3. Open the given localhost that the app generates for you, in my case I got http://localhost:5173/

### Deployment
The app is currently deployed on Netlify at this link: https/futurelink.com (Note: You can't access it as it's a hypothetical link)

### Note
- The app is using a couple of APIs, and the limit of requests to these APIs are limited. If the app is not working, it could be because the request limit has been exceeded.
- This is also my first thoughtful README so I hope you like it and find it useful.


