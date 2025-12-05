export default function RestaurantCard({ restaurant, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-8 py-4 cursor-pointer transition-colors ${
        isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'
      }`}
    >
      <h2 className="font-serif text-[20px] text-black mb-1 leading-tight">
        {restaurant.name}
      </h2>
      <p className="font-serif text-[12px] text-gray-600">
        {restaurant.address}
      </p>
    </div>
  );
}
