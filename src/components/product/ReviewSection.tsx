import { Review } from '@/types/review';

export const ReviewSection = ({ reviews }: { reviews: Review[] }) => (
  <section className="mt-10">
    <h3 className="text-xl font-semibold">Customer Reviews</h3>
    <div className="mt-4 space-y-4">
      {reviews.length === 0 ? <p className="text-textSecondary">No reviews yet.</p> : reviews.map((review) => (
        <article key={review.id} className="card p-4">
          <div className="flex items-center justify-between"><strong>{review.author}</strong><span>{review.rating}/5</span></div>
          <p className="mt-2 text-sm text-textSecondary">{review.comment}</p>
        </article>
      ))}
    </div>
  </section>
);
