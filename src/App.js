import React, { useEffect } from 'react'
import {Add, Chat, FavoriteRounded, NotificationAdd, Person, QuestionMark, Send} from "@mui/icons-material";
import './App.css';
import Logo from './images/pintrest.png'
import MenuContainer from './components/MenuContainer';
import Pin from './components/Pin';
import Data from './components/Data'

const App = () => {

  useEffect(()=>{
    const AllIcon= document.querySelectorAll(".iconContainer");

    const AddActive=()=>{
    
      AllIcon.forEach((n)=>n.classList.remove("active"));
      this.classList.add("active");
   
    }
    
    
    AllIcon.forEach((n)=> n.addEventListener("click",AddActive));
  },[]);
  return (
    <div className='App'>
    <div className='MenuContainer'>
      <img className='logo' src={Logo}/>

      <div className='subContainer'>
      <div>
        <MenuContainer icons={<Person/>}/>
        <MenuContainer icons={<NotificationAdd/>}/>
        <MenuContainer icons={<Chat/>}/>

      </div>
      <div>
      <MenuContainer icons={<FavoriteRounded/>}/>
      </div>
      <div>
        
        <MenuContainer icons={<QuestionMark/>}/>
        <MenuContainer icons={<Add/>}/>
       
        
      </div>


    </div>
    </div>
    
    <main>
      <div className='SearchBox'>
        <input type="text" placeholder="search..."/>
        <div classname="SearchIcon">
          <div className='icon'> <Send/></div>
         
        </div>

      </div>
      <div className='MainContainer'>
        {
          Data && Data.map((data)=>(  <Pin key= {data.id}pinSize={data.size} name={data.name} link={data.link} imgSrc={data.imgSrc}/>))
        }
    
   
    
  

      </div>
    </main>

    </div>
  )
}

export default App;
