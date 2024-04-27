import React,{useState} from "react";

function Search({onSearch}){
    const [searchItem,setSearchItem]=useState('')
    function handleChange(e){
        setSearchItem(e.target.value);
        onSearch(e.target.value);
    }

    return(
      <input  type="text" placeholder="Enter Transaction" value={searchItem} onChange={handleChange}/>
      
    )
}
export default Search;