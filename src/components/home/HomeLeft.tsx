import React, { useState } from "react"; 
import "./ht.css";
import { Switch, withRouter } from "react-router-dom";
import { url } from "inspector";
interface experimentprops{
  msg:string;
  method:Function;
}
const HomeTop:React.FC=(props: any)=> {
  const {msg,method}=props;
    let urlstr=props.location.pathname;
 urlstr= urlstr.slice(1)
 let index=0
  switch (urlstr) {
    case 'experiment':
       index=1;
      break;
    case 'run':
       index=2;
      break;
      case 'model':
       index=3;
      break;
      case 'dataset':
       index=4;
      break;
      case 'user':
       index=5;
      break;
    default:
      break;
  }
  const [menuArr,setMenuArr]=useState([
    {name:'Home',path:"/home"},
    {name:'Experiment',path:"/experiment",list:[{name:"Add",method:"ExperimentAdd"},{name:"Edit",method:"ExperimentEdit"}]},
    {name:"Run",path:"/run"},
    {name:"Model",path:"/model"},
    {name:"Dataset",path:"/dataset"},
    {name:"User",path:"/user"}
  ])
  const [tab,setTab]=useState(index);
  const handleRouter=(path:any,index:number):any=>{
    setTab(index)
   
    if(path){
      method('home')
      props.history.push(path);
      // console.log(props)
    }
  }
  return (
    <div className="left_menu">
      <ul className="menu_list">
        {menuArr.map((item:any,index:number)=>{
          return <li className={`menu_item ${tab===index ? "active" : ""}`}
          key={index}>
            <p  onClick={()=>handleRouter(item.path,index)}>
            {item.name}
            {item.name==="Home"?"": <span className="menu_icon">&lsaquo;</span>}
            </p>
           
           {item.list?<ul className="last_menu">{item.list.map((item2:any,index2:number)=>{
           return <li key={index2} onClick={()=>method(item2.method)}>{item2.name}</li>
           })}</ul>
           :""}
          </li>
        })}
      </ul>
    </div>
  );
}
export default withRouter(React.memo(HomeTop));