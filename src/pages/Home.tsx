import React, { Component, useState } from "react"; 
import "./../styles/homeIndex.css";
import axios from '../services/http';
import { useEffect, } from "react";
const data={
  "ent":"home",
  "oper":"index",
  "info":{

  }
}

const Home: React.FC=(props:any):any=> {
  const {msg,method}=props;
  const [indexdata,setIndexdata]=useState([])
  const [tab,setTab]=useState(0);
  useEffect(()=>{
    const promise= axios('post',data)
    promise.then(function(res:any){
      Object.assign(res,res)
      if(res.code===0 ){
        setIndexdata(res.data.data_list)
  
      }else{
        alert(res.msg)
    
      }
  
    })
  },[])
    return (
      <div className="index-box">

        
          {indexdata.map((item: any, i:number) => {
          return( <ul className="index-chart-box" key={i} id={item.card_cate}>
          
              { 
                   item.data_list.map((item2:any,index:number)=>{
                    
                  
                    return (
                 
                      <li className="index-chart-box-item" key={index}>
                         <p className="item_title">{item2.title}</p> 
                         <p className="desc">{item2.desc}</p>
                      </li>
                    );
                 })
              }
          
            </ul>
            ) 
          })}
        
      </div>
    );
  
   
}
export default React.memo(Home)


