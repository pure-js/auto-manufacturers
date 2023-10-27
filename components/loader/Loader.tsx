import loader from './loader.module.css';

const Loader = () => (
  <>
    <div className={loader['loading-icon_animated']} />
    <h3>Loading...</h3>
  </>
);

export default Loader;
