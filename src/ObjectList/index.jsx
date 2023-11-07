// @flow 
import React, {useEffect, useState} from 'react';
 const ObjectList = () => {    
    const [listData, setListData] = useState([])
   
    useEffect(()=>{
        const listObj=[{name:"Ajeet",age:30},{name:"mohit",age:40},{name:"ramesh",age:30},{name:"maxwell",age:50}];
        const finalList = listObj.map((elm)=>{
            return <li>{elm.name}</li>
        })
        setListData(finalList)
    },[])
    return (
        <div>
            <ol>
                {listData}
            </ol>
        </div>
    );
};
export default ObjectList;