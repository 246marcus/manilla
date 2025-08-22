import CarrierApply from "./CarrierApply"; // one level up

export default function Page({ params }: { params: { title: string } }) {
  const decodedTitle = decodeURIComponent(params.title);

  return (
    <main>
      <section>
        <CarrierApply title={decodedTitle} />
      </section>
    </main>
  );
}
