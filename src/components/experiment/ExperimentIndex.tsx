import React, { useEffect, useState } from "react"; 
import {  withRouter } from "react-router-dom";
import { url } from "inspector";
import { Button,Card,Table } from 'antd';
import axios from '../../services/http';
import {UnorderedListOutlined,EditFilled,DeleteFilled } from '@ant-design/icons';
import moment from 'moment'
import './experiment.css'
interface experimentprops{
  msg:string;
  method:Function;
}
const data={
    "ent":"experiment",
    "oper":"get_multi",
    "info":{
  
    }
  }
 
const ExperimentIndex:React.FC=(props: any)=> {
    const [experimentdata,setdata]=useState([])
    useEffect(()=>{
        const promise= axios('post',data)
        promise.then(function(res:any){
            Object.assign(res,res)
            if(res.code===0 ){
                setdata(res.data.data_list)
                
            }else{
              // alert(res.msg)
          
            }
        
          })
    },[])
   
    const columns=[
        {
            title:'name',
            dataIndex:'name'
        },
        {
            title:'cate',
            dataIndex:'cate'
        },
        {
            title:'desc',
            dataIndex:'desc'
        }, 
        {
            title:'create_time',
            dataIndex:'create_time',
            render:(row:any,record:any)=>{
                return moment(row*1000).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        {
            title:'operaion',
            key:'operaion',
            render:(row:any,record:any)=>{
                return (
                    <span>
                        <Button  onClick={()=>moveItem(row,record.id)}><UnorderedListOutlined color="black"/></Button>
                        <Button  onClick={()=>editItem(row,record.id)}><EditFilled /></Button>
                        <Button  onClick={()=>removeItem(row,record.id)}><DeleteFilled /></Button>
                    </span>
                )
                
                
            }
        }
    ]
    const moveItem=(row:any,key:any)=>{
        console.log(row,key)
    }
    const editItem=(row:any,key:any)=>{
        console.log(row,key)
    }
    const removeItem=(row:any,key:any)=>{
        console.log(row,key)
    }
    return(
        <div className="experiment_show_box">
            <div className="title">
                <h2>
                Experiment
                </h2>
                <div className="addbtn">

                </div>
            </div>
            <div className="content_box">
                
                <Card >
                    <Table dataSource={experimentdata} rowKey={data=>data.id}  columns={columns} bordered>
                        
                    </Table>
                </Card>
            </div>

        </div>
    )

}
export default withRouter(React.memo(ExperimentIndex));