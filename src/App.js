import React,{useState} from 'react';
import './App.css';
import Header from './Header.js';
import ItemForm from './Itemform.js';
import transactionsData from './Transactions.js';
import Table from './Table.js';



function App() {
  const [transactions,setTransactions]=useState(transactionsData)
  function handleSubmit(newTrancaction){
    
    setTransactions([...transactions,newTrancaction])
  }
  
  return (
    <div className="App">
      <Header className="App-header"  />
      <div id='form1'>
      <ItemForm onItemFormSubmit={handleSubmit}/>
      </div>
      <div id='table1'>
      <Table transactions={transactions}/>
      </div>
     
    </div>
  );
}

export default App;
