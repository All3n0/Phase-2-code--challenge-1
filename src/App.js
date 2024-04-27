import React,{useState} from 'react';
import './App.css';
import Header from './Header.js';
import ItemForm from './Itemform.js';

let transactions=[
  {Date:"2019-12-02",Description:"Paycheck for Billie Kimbers",Category:"Salaries",Amount:"2500"},
  {Date:"2019-12-03",Description:"Fuel Vehicles",Category:"Expenses",Amount:"7000"},
  {Date:"2019-12-08",Description:"Removal of wear paints",Category:"Expenses",Amount:"600"},
  {Date:"2019-12-02",Description:"Art Purchase",Category:"Luxury",Amount:"4700"},
  {Date:"2019-12-02",Description:"Paycheck for Jason Bishop",Category:"Salaries",Amount:"2500"},
  {Date:"2019-12-02",Description:"Paycheck for Billie Kimbers",Category:"Salaries",Amount:"2500"}
]

function App() {
  const [Transactions,setTransactions]=useState(transactions);
  function onItemFormSubmit(newTransact){
    setTransactions([...Transactions,newTransact])
    console.log(newTransact)
  }
  return (
    <div className="App">
      <Header className="App-header"  />
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
    </div>
  );
}

export default App;
