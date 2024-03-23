'use client';

import { useRouter } from 'next/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import { getFlagByCountryName } from '@/helpers/getEmojiFlagByISO';
// import { toLamaCase } from './toLamaCase';

import '@/helpers/helpers.css';
import table from './table.module.css';

interface TableProps {
  manufacturers: [{
    Mfr_ID: number;
    Country: string;
    Mfr_CommonName: string;
    Mfr_Name: string;
  }] | null;
}

const Table = ({ manufacturers }: TableProps) => {
  const router = useRouter();

  return (
    <table className={table.default}>
      <thead>
        <tr>
          <td className={[table.heading, 'txt-right'].join(' ')}>ID</td>
          <td className={[table.heading, 'txt-right'].join(' ')}>
            Common name
          </td>
          <td className={table.heading}>Country</td>
          <td className={table.heading} />
        </tr>
      </thead>
      <tbody>
        {manufacturers?.map(
          ({ Mfr_ID: id, Country: country, Mfr_CommonName: name, Mfr_Name: officialName }) => (
            <tr key={id} className={table.row}>
              <td
                className={[
                  table.cell,
                  'txt-right',
                  table.cell_secondary,
                ].join(' ')}
              >
                {id}
              </td>
              <td className={[table.cell, 'txt-left'].join(' ')}>
                {(name !== "") || officialName}
              </td>
              <td className={table.cell}>
                {country} {getFlagByCountryName(country)}
              </td>
              <td>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/manufacturers/${id}`);
                  }}
                  href={`/manufacturers/${id}`}
                  className={table.cell__link}
                  title="View Manufacturer Details"
                >
                  <ArrowTopRightOnSquareIcon width={18} height={18} />
                </a>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};
export default Table;
