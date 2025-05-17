import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

// There are other approaches to make this page dynamic, but this is the simplest one for the example.
export const dynamic = 'force-dynamic';

async function ImageGallery() {
  const images = (await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  }));

  return <div className="flex flex-wrap gap-4 align-start w-full">
    {images.map((image) => (
      <div key={image.id} className="size-50">
        <img
          src={image.url}
          alt={`Image ${image.id}`}
          className="object-cover rounded-[8px]"
        />
      </div>
    ))}
  </div>
}

export default async function Home() {

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <SignedOut>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Please SignIn/Up to see the images</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <ImageGallery />
      </SignedIn>
    </main>
  );
}
