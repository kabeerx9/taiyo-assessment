# Contact Management App with Charts and Maps

This project is a contact management application built with React, TypeScript, and TailwindCSS. It features a contact list management system and a dashboard displaying COVID-19 data using charts and maps.

## Features

- Contact Management:

  - Add new contacts
  - View list of contacts
  - View contact details
  - Edit and delete contacts
  - Redux state management for contacts

- Dashboard:
  - Line graph showing COVID-19 case fluctuations
  - React Leaflet map with country-specific COVID-19 data

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/kabeerx9/taiyo-assessment.git
   ```

2. Navigate to the project directory:

   ```
   cd contact-management-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the App

To start the development server, run:

```
npm start
```

The app will be available at `http://localhost:3000`.

## Building for Production

To create a production build, run:

```
npm run build
```

The build files will be created in the `build/` directory.

## API Endpoints

This app uses the following API endpoints:

1. World-wide COVID-19 data:

   - URL: https://disease.sh/v3/covid-19/all
   - Used for: Line chart displaying global case fluctuations
   - Configuration: Uses React Query with `staleTime: Infinity` as the data doesn't change frequently

2. Country-specific COVID-19 data:
   - URL: https://disease.sh/v3/covid-19/countries
   - Used for: React Leaflet map markers showing country-specific data
   - Configuration: Uses React Query with `staleTime: Infinity`

## Technologies Used

- React
- TypeScript
- TailwindCSS
- React Router v6
- React Query (TanStack Query)
- Redux
- React Leaflet

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
