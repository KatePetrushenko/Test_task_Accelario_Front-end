import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import FilterForm from './components/FilterForm/FilterForm';
import Table from './components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from './store/sagaActions';
import { EntriesProps, IEntrieProps, EntriesColumnName, IStore } from './types'

function App() {
  const dispatch = useDispatch();

  const [res, setEntries] = useState<EntriesProps>([]);
  const [order, setOrder] = useState('');  

  const entries = useSelector((state: IStore) => state.entries.entries);

  useEffect(() => {
    dispatch({ type: sagaActions.GET_ENTRIES});
  }, []);

  useEffect(() => {
    setEntries(entries);
  }, [entries])

  const handleSort = useCallback((columnName: EntriesColumnName) => {
    var arr: EntriesProps = [...entries];

    if (!order || order !== 'asc') {
      setOrder('asc');
      arr.sort(function(a: IEntrieProps, b: IEntrieProps){
        if(a[columnName] < b[columnName]) { return -1; }
        if(a[columnName] > b[columnName]) { return 1; }
        return 0;
      });
    } else {
      setOrder('desc');
      arr.sort(function(a: IEntrieProps, b: IEntrieProps){
        if(a[columnName] > b[columnName]) { return -1; }
        if(a[columnName] < b[columnName]) { return 1; }
        return 0;
      });
    }
    setEntries(arr);
  },[res])

  const handleFilter = useCallback((value: string) => {
    const filteredList = entries.filter((listItem: IEntrieProps) => {
      return listItem.API.includes(value) || listItem.Description.includes(value) ; 
    });

    setEntries(filteredList);
  },[res])

  return (
    <div className="App">
      <FilterForm handleFilter={handleFilter}/>
      <Table entriesData={res} handleSort={handleSort}/>
    </div>
  );
}

export default App;
