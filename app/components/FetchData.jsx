import React from 'react';
import DataShow from './DataShow';

const datafetch = async ()=>{
    const api  = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await api.json();
    return data;
}

const FetchData = async() => {
    const apiData  = await datafetch();
    console.log(apiData);

  return (
    <div>
        <DataShow apiData = {apiData}/>
      
    </div>
  )
}

export default FetchData
