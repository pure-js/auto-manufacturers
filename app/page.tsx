// import { useEffect, useState } from 'react';

import Table from '@/components/table';
import { getManufacturers } from '../api/api';

import styles from '@/components/layout/grid.module.css';

const HomePage = async () => {
  const manufacturers = await getManufacturers().then((data) => data.Results);

  return (
    <main className={styles.container}>
      <Table manufacturers={manufacturers} />
    </main>
  );
};

export default HomePage;
