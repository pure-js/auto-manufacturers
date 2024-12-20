// import { useEffect, useState } from 'react';
import styles from '@/components/layout/grid.module.css';
import Table from '@/components/table';

import { getManufacturers } from '@/api/index';

async function HomePage() {
  const manufacturers = await getManufacturers().then((data) => data.Results);

  return (
    <main className={styles.container}>
      <Table manufacturers={manufacturers} />
    </main>
  );
}

export default HomePage;
