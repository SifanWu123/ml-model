import React from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from "react-router";
import axios,{newheader} from '../services/http';
// import axios from 'axios'
import '../styles/login.css'
import {saveUser} from "../utils/storageUtils";
import memoryUtils from "../utils/memoryUtils";

const Login: React.FC = (props: any) => {
  const {login,method}=props;
    const [form] = Form.useForm();
    const { validateFields, getFieldsValue, setFieldsValue } = form;
    const toLogin = async () => {
        const values = await getFieldsValue();
        
      if(values.username==undefined||values.password==undefined){
        alert("username or password Can not be empty")
        return;
      }
        const userdata={
            "ent":"user",
            "oper":"login",
            "info":{
                "email":values.username,
                "password":values.password,
            },
        }
        // axios.post("/api/mlplat_backend/admin/index",userdata).then(
        //     response => {console.log('成功了',response.data);},
        //     error => {console.log('失败了',error);}
        // )
    
  
       const promise= axios('post',userdata)
       promise.then(function(res:any){
        Object.assign(res,res)
        if(res.code===0 ){
          
          saveUser(JSON.stringify(res.data))
          memoryUtils.user=res.data.email;
          memoryUtils.token=res.data.token;
          method(true)
          newheader()
          props.history.push("/home")
        }else{
          alert(res.msg)
        }
       })
 
      };
  return (
    <div className="yy-login">
      
      <div className="login-box">
          <div className="login-title">
         MLPlat
          </div>
          <div className="login_form">
          <Form  form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(values: any) => {
            console.log('Success:', values);
          }}
        >
          <Form.Item className="username"
            name="username" 
            rules={[{ required: true, message: 'Can not be empty' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
          </Form.Item>
          <Form.Item className="password"
            name="password"
            rules={[{ required: true, message: 'Can not be empty' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
              onPressEnter={toLogin}
            />
          </Form.Item>
       
        </Form>
        <Button type="primary" className="login-btn"  onClick={toLogin}>
          登录
           </Button>
          </div>
       
      </div>
    </div>
  );
}

export default withRouter(React.memo(Login))