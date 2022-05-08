import { useParams } from 'react-router-dom';

const Manufacturer = () => {
  let { id } = useParams();

  return (
    <main className="container">
      <h1>{ id }</h1>
    </main>
  );
}

export default Manufacturer;
