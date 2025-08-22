import CarrierApply from "./CarrierApply"; // one level up

export default async function Page({ params }: { params: { title: string } }) {
  const { title } = await params; // ✅ await before using
  const decodedTitle = decodeURIComponent(title);

  return (
    <main>
      <section>
        <CarrierApply title={decodedTitle} />
      </section>
    </main>
  );
}
