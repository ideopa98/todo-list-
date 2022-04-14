import React, { useEffect, useState } from 'react';
import Todoimg from '../images/todoimg.png'
const getLocalItems=()=>{
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }else {
    return[];
  }
}
const Todo = () => {
  const [inputData, setInputdata]= useState();
  const [items,setItems]= useState(getLocalItems());
  const addItem=()=>{
    if(!inputData){

    }else
setItems([...items,inputData])
setInputdata('')
  }

  const deleteItem=(id)=>{
    const updatedItems= items.filter((elem, ind)=>{
      return ind !==id;
    });
    setItems(updatedItems);
  }

  const removeAll=()=>{
    setItems([])
  }

  useEffect(()=>{
    localStorage.setItem('lists', JSON.stringify(items))
  },[items])

  
    return <>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <img src={Todoimg} alt="todo logo" />
        <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" name='' cla id=''
            placeholder='✍ Add Items......'
              value={inputData}
              onChange={(e)=> setInputdata(e.target.value)}
            />
          <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
        </div>
        <div className='showItems'>
        {
          items.map((elem, ind)=>{
            return( <div className='eachItem' key={ind}>
            <h3>{elem}</h3>
            <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=>deleteItem(ind)}></i>
          </div>
            )
          })
        }
        </div>

        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All"onClick={removeAll}> <span>CHECK LIST </span></button>
        </div>
      </div>
    </div>
  </>;
};

export default Todo;