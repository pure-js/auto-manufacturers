import { Link } from 'react-router-dom';

import Loading from '../Loading';
// import { toLamaCase } from './toLamaCase';

import './Table.css';
import './Helpers.css';

const Table = ({ manufacturers, isLoading, isError }) => (
  <table className="table">
    <thead>
      <tr>
        <td className='table-heading txt-right'>ID</td>
        <td className='table-heading txt-left'>Common name</td>
        <td className='table-heading'>Country</td>
        <td className='table-heading'/>
      </tr>
    </thead>
    <tbody>
      { manufacturers?.map(({ Mfr_ID : Id, Country, Mfr_CommonName: Name, Mfr_Name }) => (
        <tr key={Id}>
          <td className='table-cell txt-right'>{ Id }</td>
          <td className="table-cell txt-left">{ Name ? Name : Mfr_Name }</td>
          <td className='table-cell'>{ Country }</td>
          <td>
            <Link to={`/manufacturers/${Id}`}>Show details</Link>
          </td>
        </tr>
      )) }
      { isLoading || isError && (
        <tr>
          <td colSpan={3}>
            { isLoading && (<Loading />) }
            { isError && (<h3>Error!</h3>) }
          </td>
        </tr>
      ) }
    </tbody>
  </table>
);

export default Table;
