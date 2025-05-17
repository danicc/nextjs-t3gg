import { db } from "@/server/db";

// There are other approaches to make this page dynamic, but this is the simplest one for the example.
export const dynamic = 'force-dynamic';

export default async function Home() {
  const images = await (await db.query.images.findMany({ 
    orderBy: (model, { desc }) => desc(model.id)
  }));

  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-wrap gap-4">
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
      </main>
  );
}
