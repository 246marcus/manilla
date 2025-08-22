import CarrierApply from "./CarrierApply";

export default async function Page(props: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await props.params; // ✅ Await the params
  const decodedTitle = decodeURIComponent(title);

  return (
    <main>
      <section>
        <CarrierApply title={decodedTitle} />
      </section>
    </main>
  );
}
