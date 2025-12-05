import { useState } from 'react';
import SidePanel from './components/SidePanel';
import { restaurants } from './data/restaurants';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const selectedRestaurant = restaurants.find(r => r.id === selectedId);

  const handleLogoClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <div className="h-screen bg-[#2b2b2b] flex flex-col md:grid md:grid-cols-[180px_1fr_2fr] relative">
      {/* Mobile Header with Restaurant Selector */}
      <div className="md:hidden bg-white flex items-center justify-between px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <img
          src="/logo.svg"
          alt="Vish & Howl's Thai Food Place"
          className={`w-12 h-12 rounded-full object-cover cursor-pointer select-none pointer-events-auto logo-img ${isSpinning ? 'spinning' : ''}`}
          style={{ objectPosition: 'center' }}
          draggable="false"
          onClick={handleLogoClick}
        />
        <select
          value={selectedId || ''}
          onChange={(e) => setSelectedId(Number(e.target.value))}
          className="flex-1 ml-4 font-serif text-[14px] text-black bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-400"
        >
          <option value="">Select a restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>

      {/* First Column - Logo Only (Desktop) */}
      <div className="hidden md:flex bg-white items-center justify-center">
        <img
          src="/logo.svg"
          alt="Vish & Howl's Thai Food Place"
          className={`w-20 h-20 rounded-full object-cover cursor-pointer select-none pointer-events-auto logo-img ${isSpinning ? 'spinning' : ''}`}
          style={{ objectPosition: 'center' }}
          draggable="false"
          onClick={handleLogoClick}
        />
      </div>

      {/* Second Column - Restaurant Names (Desktop Only) */}
      <div className="hidden md:flex bg-white flex-col">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => setSelectedId(restaurant.id)}
            className={`flex-1 flex flex-col justify-center px-10 cursor-pointer transition-colors border-b border-gray-200 last:border-b-0 ${
              selectedId === restaurant.id ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <h2 className="font-serif text-[18px] text-black leading-tight mb-0.5">
              {restaurant.name}
            </h2>
            <p className="font-serif text-[12px] text-gray-500">
              {restaurant.address}
            </p>
          </div>
        ))}
      </div>

      {/* Third Column - Details Panel */}
      <div className="bg-[#2b2b2b] flex-1 overflow-y-auto min-h-0">
        <SidePanel restaurant={selectedRestaurant} />
      </div>

      {/* Made by attribution - Bottom Right */}
      <div className="fixed bottom-2 right-3 text-[10px] text-gray-400 font-serif z-50">
        Made by Vish
      </div>
    </div>
  );
}

export default App;
