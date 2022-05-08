import { useEffect, useState } from 'react';

import Table from '../components/Table';
import { fetchManufacturers } from '../api';

import '../components/Grid.css';

const Home = () => {
  const [isLoading, setIsLoading]= useState(true);
  const [isError, setIsError]= useState(false);
  const [manufacturers, setManufacturers]= useState(null);
  useEffect(() => {
    // setIsLoading(true);
    fetchManufacturers().then(data => {
      console.log(data);
      setManufacturers(data.Results);
      setIsLoading(false);
    }).catch((error) => {
      setIsError(true);
    })
  }, []);

  return (
    <main className="container">
      <Table manufacturers={manufacturers} isLoading={isLoading} isError={isError} />
    </main>
  );
}

export default Home;
