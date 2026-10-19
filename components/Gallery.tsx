import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function Gallery({ images, empty }: { images: GalleryImage[]; empty?: string }) {
  if (images.length === 0) {
    return empty ? <p className="max-w-2xl text-lg leading-8 text-muted">{empty}</p> : null;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <li
          key={image.src}
          className={`overflow-hidden rounded-2xl bg-linen ${index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={index === 0 ? "(max-width: 1024px) 100vw, 1152px" : "(max-width: 640px) 100vw, 33vw"}
            className={`w-full object-cover transition-transform duration-500 hover:scale-[1.02] ${
              index === 0 ? "aspect-[21/9] max-h-[28rem]" : "aspect-[4/3]"
            }`}
            priority={index === 0}
          />
        </li>
      ))}
    </ul>
  );
}
