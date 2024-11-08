import styles from '@/components/layout/grid.module.css';

export function generateStaticParams() {
  return [{ id: '955' }, { id: '956' }, { id: '957' }]; // TODO: fix hardcoded values
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
