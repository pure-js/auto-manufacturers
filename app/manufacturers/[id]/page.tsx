const Manufacturer = ({ params }: { params: { id: string } }) => {

  return (
    <main className="container">
      <h1>{ params.id }</h1>
    </main>
  );
}

export default Manufacturer;
