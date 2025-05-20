import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// There are other approaches to make this page dynamic, but this is the simplest one for the example.
export const dynamic = 'force-dynamic';

async function ImageGallery() {
  const images = await getMyImages();

  return <div className="flex flex-wrap 
  justify-center gap-4 p-4">
    {images.map((image) => (
      <div key={image.id} className="flex flex-col w-48 h-48">
        <Link href={`/img/${image.id}`}>
          <Image
            src={image.url}
            alt={`Image ${image.id}`}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
          />
        </Link>
      </div>
    ))}
  </div>
}

export default async function Home() {
  return (
    <div className="flex">
      <SignedOut>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Please SignIn/Up to see the images</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <ImageGallery />
      </SignedIn>
    </div>
  );
}
