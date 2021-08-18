# Tenki no ko - A 3-day weather forecast web application

This is a simple 3-day weather forecast [web application](https://tenki-no-ko.vercel.app/) that showcases basic testing with
Cypress, both on the
integration and
component levels

### Tech stack

- **[NextJS](https://github.com/vercel/next.js)** - The React Framework
- **Typescript**
- **Material UI**
- **Styled components**
- **Cypress**

### Setup and Run

- `$ git clone git@github.com:iammary/tenki-no-ko.git && cd tenki-no-ko` will download the app and cd to the folder
  once done.

#### Environment variables

The project reads two API keys from environment files. Update `.env` or create your own `.env.local` to add the
following:

1. NEXT_PUBLIC_WEATHER_API_KEY
2. NEXT_PUBLIC_GOOGLE_PLACES_API_KEY

#### Execution

```bash
npm install
npm run dev
```

#### Production build (run nextjs build)

```bash
npm run build
```

### Packages and Libraries

- [nextjs boilerplate](https://github.com/iammary/nextjs-typescript-materialui-styled-components-starter) - my
  personal template to start a nextjs project
- [styled components](https://www.styled-components.com/) - Utilising tagged template literals and the power of CSS, 
  styled-components allows you to write actual CSS code to style your components.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [react-content-loader](https://github.com/danilowoz/react-content-loader) - SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).
- [moment-timezone](https://momentjs.com/timezone/) - format epoch time to searched city's timezone
- [use-places-autocomplete](https://use-places-autocomplete.netlify.app/) - a React hook for Google Maps Places Autocomplete
- [react-sweet-state](https://github.com/atlassian/react-sweet-state) - shared state management solution for React

### Cypress integration and Component Testing

Integration and component testing are both handled by cypress. Cypress just introduced component testing (alpha) with
their latest [release](https://docs.cypress.io/guides/component-testing/introduction).

Test coverage is automatically generated to the `coverage` directory when component testing is run - an integration added by `@cypress/code-coverage babel-plugin-istanbul`

#### Run integration testing

```bash
npm run cypress
```

*Note: for cypress integration test to run, please make sure you have filled out .env file for NEXT_PUBLIC_WEATHER_API_KEY*

#### Run component testing

```bash
npm run cypress-ct
```

#### Run ci-based component testing

```bash
npm run ct
```

### APIs

1. Weather forecasting from [weatherapi.com](https://www.weatherapi.com/)
2. Places Autocomplete from [googlemaps](https://developers.google.com/maps/documentation/javascript/places-autocomplete).

### Design decisions

While weatherapi also provides data for places, I decided with Google Maps for:

1. more thorough search results
2. availability of use-places-autocomplete package for integration

### Further enhancements
1. storybook for components
2. additional test coverage
