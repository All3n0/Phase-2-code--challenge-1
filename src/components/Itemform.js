import React,{useState} from "react";
import '../css/Itemform.css'

function ItemForm({onItemFormSubmit}){
    const [date,setDate]=useState("")
    const [Description,setDescription] =useState("");
    const [Category,setCategory] = useState("");
    const [amount,setAmount] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const newTrancaction={Date:date,Description:Description,Category:Category,Amount:amount}
        onItemFormSubmit(newTrancaction);
        setDate('');
        setDescription('');
        setAmount('');
    }
    function handleDateChange(event){
        const inputDate=event.target.value;
        setDate(inputDate)
        
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }
    function handleCategoryChange(event){
        setCategory(event.target.value)
    }
    function handleAmountChange(event){
        const inputAmount = event.target.value;
    
    const parsedAmount = parseFloat(inputAmount);
    if (!isNaN(parsedAmount) || inputAmount === "") {
        setAmount(parsedAmount);
    } else {
        setAmount(0);
    }

    }
    return(
        <div>
            <form id="fiorm"onSubmit={handleSubmit}>
            <label>
                Date:
                <input className="input" placeholder="YYYY/MM/DD" type="text" name="date" value={date} onChange={handleDateChange}></input>
            </label>
            <label>
                Description:
                <input className="input" placeholder="Description" type="text" name="description" value={Description} onChange={handleDescriptionChange}></input>
            </label>
            <label>
                Category:
                <select className="input" name="category" value={Category} onChange={handleCategoryChange}>
                    <option  value='Expenses'>Expenses</option>
                    <option  value='Luxury'>Luxury</option>
                    <option  value='Salaries'>Salaries</option>
                </select>
            </label>
            <label>
                Amount:
                <input className="input" placeholder="Amount" type="text" name="amount" value={amount} onChange={handleAmountChange}></input>
            </label>
            <button id="button"type="submit">New Transaction</button>
        </form>
        </div>
    )
}
export default ItemForm;