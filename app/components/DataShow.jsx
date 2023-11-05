import React from 'react'

function DataShow({apiData}) {
  return (
    <div>
      
    { apiData.map((item)=>{

       return (<>
           <h5>{item.title}</h5>
       </>)

    }) }

    </div>
  )
}

export default DataShow;
