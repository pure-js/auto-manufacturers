'use client';

import { useRouter } from 'next/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import { getFlagByCountryName } from '@/helpers/getEmojiFlagByISO';
// import { toLamaCase } from './toLamaCase';

import '@/helpers/helpers.css';
import styles from './table.module.css';

interface TableProps {
  manufacturers: Array<any> | null;
}

const Table = ({ manufacturers }: TableProps) => {
  const router = useRouter();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td className={[styles.heading, 'txt-right'].join(' ')}>ID</td>
          <td className={[styles.heading, 'txt-right'].join(' ')}>
            Common name
          </td>
          <td className={styles.heading}>Country</td>
          <td className={styles.heading} />
        </tr>
      </thead>
      <tbody>
        {manufacturers?.map(
          ({ Mfr_ID: Id, Country, Mfr_CommonName: Name, Mfr_Name }) => (
            <tr key={Id} className={styles.row}>
              <td
                className={[
                  styles.cell,
                  'txt-right',
                  styles['table-cell_secondary'],
                ].join(' ')}
              >
                {Id}
              </td>
              <td className={[styles.cell, 'txt-left'].join(' ')}>
                {Name ? Name : Mfr_Name}
              </td>
              <td className={styles.cell}>
                {Country} {getFlagByCountryName(Country)}
              </td>
              <td>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/manufacturers/${Id}`);
                  }}
                  href={`/manufacturers/${Id}`}
                  className={styles['table-cell__link']}
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
