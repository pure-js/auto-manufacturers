'use client';

import { useRouter } from 'next/navigation';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import { getFlagByCountryName } from '@/helpers/getEmojiFlagByISO';
// import { toLamaCase } from './toLamaCase';
import '@/helpers/helpers.css';

import table from './table.module.css';

interface TableProps {
  readonly manufacturers:
    | [
        {
          Mfr_ID: number;
          Country: string;
          Mfr_CommonName: string;
          Mfr_Name: string;
        },
      ]
    | null;
}

function Table({ manufacturers }: TableProps) {
  const router = useRouter();

  return (
    <table className={table.default}>
      <thead>
        <tr>
          <td className={[table.heading, 'txt-right'].join(' ')}>{'ID'}</td>
          <td className={[table.heading, 'txt-right'].join(' ')}>
            {'Common name'}
          </td>
          <td className={table.heading}>{'Country'}</td>
          <td className={table.heading} />
        </tr>
      </thead>
      <tbody>
        {manufacturers?.map(
          ({
            Mfr_ID: id,
            Country: country,
            Mfr_CommonName: name,
            Mfr_Name: legalName,
          }) => (
            <tr className={table.row} key={id}>
              <td
                className={[table.cell, 'txt-right', table.cell_secondary].join(
                  ' ',
                )}
              >
                {id}
              </td>
              <td className={[table.cell, 'txt-left'].join(' ')}>
                {name ?? legalName}
              </td>
              <td className={table.cell}>
                {country} {getFlagByCountryName(country)}
              </td>
              <td>
                <a
                  className={table.cell__link}
                  href={`/manufacturers/${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/manufacturers/${id}`);
                  }}
                  title="View Manufacturer Details"
                >
                  <ArrowTopRightOnSquareIcon height={18} width={18} />
                </a>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
export default Table;
