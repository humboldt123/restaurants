import RestaurantCard from './RestaurantCard';

export default function RestaurantList({ restaurants, selectedId, onSelect }) {
  return (
    <div className="bg-white h-full overflow-y-auto">
      <div className="p-8 pb-6">
        <img
          src="/logo.svg"
          alt="Vish & Howl's Thai Food Place"
          className="w-32 h-32 rounded-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          isSelected={selectedId === restaurant.id}
          onClick={() => onSelect(restaurant.id)}
        />
      ))}
    </div>
  );
}
