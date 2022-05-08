import { Link } from 'react-router-dom';

import Loading from '../Loading';
import './Table.css';
import './Helpers.css';

const Table = ({ manufacturers, isLoading, isError }) => (
  <table>
    <thead>
      <tr>
        <td className='table-heading'>ID</td>
        <td className='table-heading txt-left'>Common name</td>
        <td className='table-heading'>Country</td>
        <td className='table-heading'/>
      </tr>
    </thead>
    <tbody>
      { manufacturers?.map(({ Mfr_ID : Id, Country, Mfr_CommonName: Name }) => (
        <tr key={Id}>
          <td>{ Id }</td>
          <td className="txt-left">{ Name }</td>
          <td>{ Country }</td>
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
