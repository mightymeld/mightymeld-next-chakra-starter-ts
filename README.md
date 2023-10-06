# MightyMeld Next.js Chakra UI Starter

A boilerplate project for quickly setting up an application using Next.js and Chakra UI and MightyMeld.

## Getting Started

Follow these steps to set up and start using the boilerplate:

1. **Clone the Repository**: 1. Clone this template using [degit](https://github.com/Rich-Harris/degit), change "mightymeld-next-chakra-project" with your own project name <br />

   ```bash
    npx degit mightymeld/ts-mightymeld-next-chakra-starter "mightymeld-next-chakra-project"
   ```

2. Run `npm install` to install depenendencies.

3. Create an `.env` file with your MightyMeld secret and instance ID (available on the [MightyMeld Portal](https://mightymeld.app)).

4. Run `npx mightymeld` to launch MightyMeld studio in a browser tab.


## Running the app without MightyMeld

1. Type `npm install` to install dependencies.

2. Run `npm run dev`, the app should then appear in a browser tab on [localhost:3000](localhost:3000)

## Using Another Package Manager

If you would like to use an alternative package manager like yarn or pnpm, make sure to also update the run command in your mightymeld.json file
