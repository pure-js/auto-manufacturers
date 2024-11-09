import loader from './loader.module.css';

function Loader() {
  return (
    <>
      <div className={loader['loading-icon_animated']} />
      <h3>{'Loading...'}</h3>
    </>
  );
}

export default Loader;
