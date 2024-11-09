import styles from '@/components/layout/grid.module.css';

import { getManufacturers } from '@/api';

interface Manufacturer {
  Mfr_ID: number;
}

export async function generateStaticParams() {
  const manufacturers = await getManufacturers().then((data) =>
    data.Results.map((x: Manufacturer) => ({ id: x.Mfr_ID.toString() })),
  );
  return manufacturers;
}

export default async function Manufacturer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className={styles.container}>
      <h1>{id}</h1>
    </main>
  );
}
