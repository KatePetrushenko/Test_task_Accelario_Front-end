import React, {useState} from 'react';
import './styles.scss';

interface IEntriesItemProps {
    handleFilter: (value: string) => void;
}

function FilterForm({handleFilter}: IEntriesItemProps) {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFilter(e.target.value);
        setValue(e.target.value);
    }
    return (
        <form className='sortFilterForm'>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Filter table by API or Description"
            />
        </form>
    )
}

export default FilterForm; 