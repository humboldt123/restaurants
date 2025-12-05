import { Star } from 'lucide-react';

export default function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5 items-center mb-4">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-400" style={{ fontSize: '20px' }}>⭐️</span>
      ))}
      {hasHalfStar && (
        <span className="text-yellow-400" style={{ fontSize: '20px' }}>✨</span>
      )}
    </div>
  );
}
