import React from 'react';
import EntriesItem from './../EntriesItem/EntriesItem';
import './styles.scss';
import { EntriesProps, IEntrieProps, EntriesColumnName } from '../../types';

const firstColumnName = 'API';
const secondColumnName = 'Description';
const thirdColumnName = 'Category';

interface ITableProps {
    entriesData: EntriesProps;
    handleSort: (value: EntriesColumnName) => void;
}

const Table = React.memo(({entriesData, handleSort}: ITableProps) => (
    <table className="sortTable">
        <thead>
            <tr>
                <th onClick={() => handleSort(firstColumnName)}>{firstColumnName}</th>
                <th onClick={() => handleSort(secondColumnName)}>{secondColumnName}</th>
                <th onClick={() => handleSort(thirdColumnName)}>{thirdColumnName}</th>
            </tr>
        </thead>
        <tbody>
            {entriesData.map((val: IEntrieProps, index: number) => {
                return (
                    <EntriesItem val={val} key={index} />
                )
            })}
        </tbody>
    </table>
));

export default Table; 
