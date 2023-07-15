'use client'
 
import { useRouter } from 'next/navigation'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import { getFlagByCountryName } from '../helpers/getEmojiFlagByISO'
// import { toLamaCase } from './toLamaCase';

import './Table.css';
import './Helpers.css';

interface TableProps {
  manufacturers: Array<any> | null;
}

const Table = ({ manufacturers }: TableProps) => {
  const router = useRouter();

  return (
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
            <td className='table-cell'>{ Country } { getFlagByCountryName(Country) }</td>
            <td>
              <a onClick={(e) => {
                e.preventDefault();
                router.push(`/manufacturers/${Id}`);
              }} href={`/manufacturers/${Id}`} className="table-cell__link">
                <ArrowTopRightOnSquareIcon width={18} height={18} />
              </a>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
export default Table;
