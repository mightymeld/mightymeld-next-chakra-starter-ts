# MightyMeld Next.js Chakra UI Starter

A boilerplate project for quickly setting up an application using Next.js and Chakra UI and MightyMeld.

## Getting Started

Follow these steps to set up and start using the boilerplate:

1. **Clone the Repository**: 1. Clone this template using [degit](https://github.com/Rich-Harris/degit), change "mightymeld-next-chakra-project" with your own project name <br />

   ```bash
    npx degit mightymeld/ts-mightymeld-next-chakra-starter "mightymeld-next-chakra-project"
   ```

2. **Install Dependencies**: install the dependencies:
   using yarn

   ```bash
    cd mightymeld-next-chakra-project

    yarn install
   ```

   or using npm

   ```bash
    cd mightymeld-next-chakra-project

    npm install
   ```
(If you're using yarn, you can change the run command in the mightymeld.json file to `yarn dev`.)
3. Copy `.env.template` to `.env` and add your MightyMeld secret and instance ID. If you don’t have an instance ID, [sign up for MightyMeld](https://www.mightymeld.com).

4. Launch the app using:

   ```bash
    npx mightymeld
   ```

5. Once the app has loaded, visit [studio.mightymeld.app](https://studio.mightymeld.app/) to begin editing your app.


Or you can click "Use this template" button above to clone.

### Running the app without MightyMeld

1. Run the following command to start the app:

```bash
    npm run dev
```

The app should appear in a browser tab at localhost:3000.

## Features

- **Next.js**: (https://nextjs.org/docs/)
- **Chakra UI**: (https://chakra-ui.com/)
- **MightyMeld**: (https://www.mightymeld.com/)

## Customization

Here are a few areas you might want to customize:

- **Styling**: Utilize Chakra UI's theming and styling capabilities to match your project's design.
- **Components**: Use Chakra UI components to quickly build UI elements.
- **MightyMeld Integration**: Explore MightyMeld's tools and prefabs to further enhance your development process.
