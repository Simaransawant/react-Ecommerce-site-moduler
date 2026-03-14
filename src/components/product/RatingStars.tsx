export const RatingStars = ({ rating }: { rating: number }) => (
  <span aria-label={`Rating ${rating}`} className="text-amber-500">{'★'.repeat(Math.round(rating))}</span>
);
