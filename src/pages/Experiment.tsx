import React, { useState } from "react"; 
import "./../styles/experiment.css";
import axios from '../services/http';
import { withRouter } from "react-router";
import ExperimentIndex from '../components/experiment/ExperimentIndex'
import ExperimentAdd from '../components/experiment/ExperimentAdd'
const Experiment:React.FC=(props:any):any=>{
    const {msg,method}=props;
    return(
        <div id="experiment" className={"experiment_box "+msg}>
           {
            msg=="home"? <ExperimentIndex />: msg=="ExperimentAdd"?<ExperimentAdd />:  <div className="experiment_edit_box">
                edit
            </div>
           } 

           
            
          
        </div>
    )
}
export default withRouter(React.memo(Experiment));
// export default React.memo(Experiment)