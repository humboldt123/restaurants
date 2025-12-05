# Restaurant Site

Site for honors project; documents restaurants I went to with a friend. Might update later to include all restraunts. Check it out at [restaurants.vivime.info](https://restaurants.vivime.info)

## Tech Stack

React, Vite and Tailwind. Leaflet for the Maps. Hosted with Github Pages

## Installation

```bash
git clone https://github.com/humboldt123/restaurants/

# install dependencies
npm install

# then start development server..
npm run dev

# ...OR build for production
npm run build

```

## Adding New Restaurants

Edit `src/data/restaurants.js` and add a new entry:

```javascript
{
  id: 10,
  name: "Restaurant Name",
  location: "City, State",
  date: "Month Day, Year",
  time: "12:00 PM",
  timeOfDay: "The Afternoon",
  address: "City, State",
  rating: 4.5,
  coords: { lat: 40.0000, lng: -75.0000 },
  order: [
    { item: "Dish Name", quantity: 1, note: "Optional note", highlight: true }
  ],
  notes: ["General notes about the visit"]
}
```

