# SAP Spartacus Application Demo

A simple Angular application, demonstrating how to integrate the Booxi Booknow widget, into an SAP Spartacus application. 

## Getting Started

### Pre-requisites

- [Prerequisites documented by SAP](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/cfcf687ce2544bba9799aa6c8314ecd0/e38d45609de04412920a7fc9c13d41e3.html#prerequisites)
- [Docker v24.0+](https://docs.docker.com/engine/release-notes/24.0/)
- A valid Booxi business, and its [API Key](https://help.booxi.com/en/articles/1236110-where-can-you-find-your-api-key)

### Spartacus

The demo application depends on a set of spartacus libraries. Those libraries are either accessible from a local, or private npm repository. In order to simplify accessibility, this project opted to compile the libraries from source, and publish them to a local npm repository.

To build and serve the local repository, run the following command:

```bash
$> docker-compose up
```

The process will take a few minutes to complete. Once completed, the local npm repository is available at http://localhost:4873.

### Build the Demo 

The demo application is an angular application, that can be built using the following command:

```bash
$> npm install
```

This will download and install all required dependencies. The process will authenticate to the [Verdaccio](https://verdaccio.org/) repository, using the static, local credentials provided in the *.npmrc* file of the project. 

### Configure the Demo

1. In the file [index.html](./src/index.html), configure the Booxi widget script, based on the region of your Booxi business.

```html
  <!--
  Consult the Booxi documentation to know which URL to include here as it changes depending on
  the region your Booxi account is in.
  - US: https://www.booxi.com/booknow/booknow.js
  - EU: https://www.booxi.eu/booknow/booknow.js
  -->
<script src="https://www.booxi.com/booknow/booknow.js"></script>
```

2. In the [booknow.component.ts](./src/app/booxi/booknow/booknow.component.ts) file, replace **{YOUR_API_KEY}** by the Booxi business [API key](https://help.booxi.com/en/articles/1236110-where-can-you-find-your-api-key).

```typescript
BookNow.open({
  // The API key that can be found in the Booxi Back Office's business details page.
  apiKey: '{YOUR_API_KEY}',
});
```


### Run the Demo

The demo can be started using the following command:

```bash
$> npm start
```

The process will take a few minutes to complete. Once completed, the demo application is available at http://localhost:4200.

