import React,{useState} from 'react';
import './App.css';
import Axios from 'axios'
import './Celebrity.css';
import {FaSearch} from 'react-icons/fa';

function Celebrity() {
    let [celebrity,setCelebrity] = useState()
    let [name,setName] = useState()
    let [nationality,setNationality] = useState()
    let [birthdy,setBerthdy] = useState()
    let [age,setAge] = useState()
    let [gender,setGender] = useState()
    let [height,setHeight] = useState()
    let [isAlive,setIsAlive] = useState()
    let [netWorth,setNetWorth] = useState()
    let [occupation,setOccupation] = useState()

    let [data,setData] = useState(true)

  let getData= (celebrity)=> Axios({
    method:'GET',
    url:`https://api.api-ninjas.com/v1/celebrity?name=${celebrity}`,
    headers: { 'X-Api-Key': '5EufIFcBjCHJLulV1V2HHA==L0QRbB3jgw95DjFA' }

  }).then(
    (response)=>{
      console.log(response) 
      setName(response.data[0].name)
      setNationality(response.data[0].nationality)
      setBerthdy(response.data[0].birthdy)
      setAge(response.data[0].age)
      setIsAlive(response.data[0].is_alive)
      setGender(response.data[0].gender)
      setHeight(response.data[0].height)
      setNetWorth(response.data[0].net_worth)
      setOccupation(response.data[0].occupation)
            

    
    })
    
    let values =          <div className='container'>
    <div className='box'>
      <h1><p>name: </p> {name}</h1>
      <h1><p>nationality: </p> {nationality  == undefined ?'null' : nationality }</h1>
     <h1> <p>date of birthday: </p>{birthdy  == undefined ?'null' : birthdy }</h1>
      <h1><p>age: </p> {age + ' years'}</h1>
             <h1><p>gender: </p>   {gender}</h1>
       <h1><p>height: </p>  {height == undefined ?'null' : height + 'cm' }</h1>
       <h1> <p>Wealth: </p>   {netWorth == undefined? 'null' : netWorth + '$'}</h1>
       <h1> <p>the job:</p>   {occupation == undefined ?'null' : occupation + ' '}</h1>
       <h1> {isAlive ? '':<h1><p>died at age: </p> {age} </h1> }</h1>

 </div>
</div>


  return (
    <>
       <input type="text" placeholder='search  for a celebrity' onChange={(e)=>setCelebrity(e.target.value.toLowerCase())} />
   <button onClick={()=>{getData(celebrity == '' || undefined?null: celebrity);setData(data = false);}}>get information</button>

      {!data ? values : ' '}
      {!celebrity == undefined ? ' ': ''}

    </>
  );
}

export default Celebrity;


/*
*/