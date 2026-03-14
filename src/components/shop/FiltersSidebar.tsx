import Link from 'next/link';

export const FiltersSidebar = () => (
  <aside className="card h-fit space-y-4 p-4">
    <h3 className="font-semibold">Filters</h3>
    <div>
      <p className="text-sm font-medium">Category</p>
      <div className="mt-2 grid gap-2 text-sm">
        <Link href="/shop?category=Shoes">Shoes</Link>
        <Link href="/shop?category=Accessories">Accessories</Link>
        <Link href="/shop?category=Electronics">Electronics</Link>
      </div>
    </div>
    <p className="text-sm text-textSecondary">Price · Rating · Availability from query params.</p>
  </aside>
);
