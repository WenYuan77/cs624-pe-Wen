# React Native Cities & Countries App

## App Overview
A mobile app with four main screens accessible via a bottom tab navigator:

1. **CitiesNav** – View saved cities and their locations.
2. **AddCity** – Add a new city and its locations.
3. **CountriesNav** – View saved countries and their currencies.
4. **AddCountry** – Add a new country and its currencies.

## Features

- **Add City**: Input "City name" & "Country name", tap "Add City" → Appears in `CitiesNav`.
- **Add Location**: Inside a city, input "Location name" & "Location info" → Appends to city.
- **Add Country**: Input "Country name" & "Currency name", tap "Add Country" → Appears in `CountriesNav`.
- **Add Currency**: Inside a country, input "Currency name" & "Currency info" → Appends to country.

## Navigation & State

- Bottom tab navigation powered by `@react-navigation/bottom-tabs`.
- City/Location and Country/Currency flows use stack navigation.
- All data/state (cities, countries) and add functions are passed via route params.
- Alerts appear if form fields are left incomplete.

## Initial State

- App loads on `CitiesNav` with **"No saved cities!"**
- `CountriesNav` shows **"No saved countries!"** if empty.
- New items appear **at the bottom** of lists after submission.
