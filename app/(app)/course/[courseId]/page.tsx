export default function page() {
  return (
    <main className="w-full h-screen grid grid-cols-[4fr_3fr]">
      <div className="bg-muted aspect-video flex">
        <span className="m-auto">Video Player</span>
      </div>
      <div className="row-span-2 text-center pt-10 bg-neutral-700">Course Structure</div>
      <div className="text-center">Course Info</div>
    </main>
  );
}
