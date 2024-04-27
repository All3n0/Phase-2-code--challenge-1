import React,{useState} from "react";

function ItemForm({onItemFormSubmit}){
    const [date,setDate]=useState("")
    const [Description,setDescription] =useState("");
    const [Category,setCategory] = useState("");
    const [amount,setAmount] = useState("0");

    function handleSubmit(event){
        event.preventDefault();
        const newTrancaction={Date:date,Description:Description,Category:Category,Amount:amount}
        onItemFormSubmit(newTrancaction);
        setDate('');
        setDescription('');
        setAmount('0');
    }
    function handleDateChange(event){
        setDate(event.target.value);
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }
    function handleCategoryChange(event){
        setCategory(event.target.value)
    }
    function handleAmountChange(event){
        setAmount(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="text" name="date" value={date} onChange={handleDateChange}></input>
            </label>
            <label>
                Description:
                <input type="text" name="description" value={Description} onChange={handleDescriptionChange}></input>
            </label>
            <label>
                Category:
                <select name="category" value={Category} onChange={handleCategoryChange}>
                    <option value='Expenses'>Expenses</option>
                    <option value='Luxury'>Luxury</option>
                    <option value='Salaries'>Salaries</option>
                </select>
            </label>
            <label>
                Amount:
                <input type="text" name="amount" value={amount} onChange={handleAmountChange}></input>
            </label>
            <button type="submit">New Transaction</button>
        </form>
        </div>
    )
}
export default ItemForm;