import React,{useState} from 'react';
import './App.css';
import Header from './Header.js';
import ItemForm from './Itemform.js';
import transactionsData from './Transactions.js';
import Table from './Table.js';
import Search from './Search.js';



function App() {
  const [transactions,setTransactions]=useState(transactionsData);
  const [filteredTransactions,setFilteredTransactions]=useState(transactionsData);
  function handleSubmit(newTrancaction){
    
    setTransactions([...transactions,newTrancaction]);
    setFilteredTransactions([...transactions,newTrancaction])
  }
  function handleSearch(searchTerm){
    const filtered=transactions.filter(transaction=>
    transaction.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredTransactions(filtered);
  }
  return (
    <div className="App">
      <Header   />
      <Search onSearch={handleSearch}/>
      <ItemForm onItemFormSubmit={handleSubmit}/>
      
      
      <Table transactions={filteredTransactions}/>
      
     
    </div>
  );
}

export default App;
