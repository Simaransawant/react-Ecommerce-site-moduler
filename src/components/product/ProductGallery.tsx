import Image from 'next/image';

export const ProductGallery = ({ images, name }: { images: string[]; name: string }) => (
  <div className="grid gap-3">
    {images.map((img) => (
      <Image key={img} src={img} alt={name} width={900} height={700} className="h-64 w-full rounded-lg object-cover" />
    ))}
  </div>
);
