import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import Loading from '../Loading';
import { getEmojiFlagByISO } from '../helpers/getEmojiFlagByISO'
// import { toLamaCase } from './toLamaCase';

import './Table.css';
import './Helpers.css';

interface TableProps {
  manufacturers: Array<any> | null;
  isLoading: boolean;
  isError: boolean;
}

const Table = ({ manufacturers, isLoading, isError }: TableProps) => (
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
        <tr key={Id} className="table-row">
          <td className='table-cell txt-right table-cell_secondary'>{ Id }</td>
          <td className="table-cell txt-left">{ Name ? Name : Mfr_Name }</td>
          <td className='table-cell'>{ Country } { getEmojiFlagByISO('US') }</td>
          <td>
            <Link to={`/manufacturers/${Id}`} className="table-cell__link">
              <ExternalLinkIcon width={18} height={18} />
            </Link>
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
