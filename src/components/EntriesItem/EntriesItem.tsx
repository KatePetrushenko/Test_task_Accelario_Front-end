import React from 'react';
import { IEntrieProps } from '../../types';

interface IEntriesItemProps {
    val: IEntrieProps;
}

const EntriesItem = ({val}: IEntriesItemProps) => (
    <tr>
        <td>{val.API}</td>
        <td>{val.Description}</td>
        <td>{val.Category}</td>
    </tr>
)

export default EntriesItem; 