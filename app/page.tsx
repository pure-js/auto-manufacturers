// import { useEffect, useState } from 'react';

import Table from '@/components/Table';
import { getManufacturers } from './api';

import '@/components/grid.css';

const HomePage = async () => {
  const manufacturers = await getManufacturers().then((data) => data.Results);

  return (
    <main className="container">
      <Table manufacturers={manufacturers} />
    </main>
  );
};

export default HomePage;
