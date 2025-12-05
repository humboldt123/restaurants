import Map from './Map';
import OrderDetails from './OrderDetails';
import StarRating from './StarRating';

export default function SidePanel({ restaurant }) {
  if (!restaurant) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p className="text-[15px] font-serif tracking-wide">← Select a restaurant</p>
      </div>
    );
  }

  return (
  <div className="h-full flex flex-col md:flex-row">
    {/* Left content - fixed max width for consistency */}
    <div className="flex-1 flex flex-col justify-center px-6 py-8 md:pl-16 md:pr-8 md:py-0">
      <div className="max-w-[400px]">
        <div className="mb-8 md:mb-10">
          <StarRating rating={restaurant.rating} />
          {restaurant.date && (
            <div className="text-[13px] font-serif text-gray-400 mt-3">
              {restaurant.date}{restaurant.timeOfDay && (
                restaurant.time ? (
                  <span title={restaurant.time} className="cursor-help">
                    {' · '}{restaurant.timeOfDay}
                  </span>
                ) : (
                  <span>
                    {' · '}{restaurant.timeOfDay}
                  </span>
                )
              )}
            </div>
          )}
        </div>
        <OrderDetails order={restaurant.order} notes={restaurant.notes} />
      </div>
    </div>

    {/* Right map - centered vertically with equal spacing */}
    <div className="w-full md:w-[380px] h-[300px] md:h-full flex items-center px-6 py-6 md:py-8 md:pr-12 md:pl-0">
      <div className="w-full h-full md:h-[480px]">
        <Map location={restaurant.coords} name={restaurant.name} />
      </div>
    </div>
  </div>
);
}
