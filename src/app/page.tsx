import { db } from "~/server/db";

export const dynamic = "force-dynamic"; 

const mockUrls = [
  'https://utfs.io/f/7d191805-b5d8-4e25-8a6b-df0e9e41adcc-hf9g6b.jpg',
  'https://utfs.io/f/b92a4774-ea2c-4e3e-b5f5-4fa3a295ad19-ex6jp9.jpg',
  'https://utfs.io/f/2a26a7fb-84d5-4518-b06e-25a4dba0064e-f7sfum.jpg',
  'https://utfs.io/f/9152ceb3-b7a0-43e0-91e0-e1d160b348de-ep2qfa.jpg'

]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello World
    </main>
  );
}
