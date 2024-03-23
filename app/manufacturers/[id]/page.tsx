import styles from '@/components/layout/grid.module.css';

const Manufacturer = ({ params }: { params: { id: string } }) => {
  return (
    <main className={styles.container}>
      <h1>{params.id}</h1>
    </main>
  );
};

export default Manufacturer;
