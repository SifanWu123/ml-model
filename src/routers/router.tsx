import React,{useState} from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import HomeTop from "../components/home/HomeTop";
import HomeLeft from "../components/home/HomeLeft";
import Index from "../pages/Home";
import Experiment from "../pages/Experiment";
import Login from "../pages/Login";
import memoryUtils from "../utils/memoryUtils";
import { getUser } from "../utils/storageUtils";
const AppRouter: React.FC = (props:any):any => {
  const [showhow ,setShowhow]=useState("home")
  // const [islogin,setlogin]=useState(false)
  const changehow=(str:string):any=>{
    setShowhow(str)
  }
  Experiment.defaultProps=
  HomeLeft.defaultProps={
    msg:showhow,
    method:changehow,
    // islogin:islogin
  }
  // Login.defaultProps={
  //   login:islogin,
  //   method:setlogin
  // }

if(memoryUtils.user==""&&getUser()==""){
  return <HashRouter><Route path="/login" component={Login}/><Redirect to='/login'/></HashRouter>
}
  return (
    <HashRouter>
      <HomeTop />
      <div className={'page_content '+showhow}>
        <Route>
          <HomeLeft />
          <Switch>
            <Route path="/home" exact>
              <Index />
            </Route>
            <Route path="/experiment" exact>
              <Experiment />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Route>
      </div>
    </HashRouter>
  );
}
export default React.memo(AppRouter)