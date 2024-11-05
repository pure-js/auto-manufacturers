import styles from '@/components/layout/grid.module.css';

const Manufacturer = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <main className={styles.container}>
      <h1>{params.id}</h1>
    </main>
  );
};

export default Manufacturer;
