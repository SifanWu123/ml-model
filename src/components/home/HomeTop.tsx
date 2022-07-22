import React from "react";
import "../../styles/homeIndex.css";
import { withRouter } from "react-router-dom";
import {getUser} from '../../utils/storageUtils';

const HomeIndex: React.FC = (props: any) => {
const userdata=JSON.parse(getUser())

const email=userdata.email

  return (
    <div>
      <header className="yy-header">
        <div className="yy-logo">
         MLPlat
        </div>
       
        <div className="username">
          {email}
        </div>
      </header>
    
    </div>
  );
}

export default withRouter(React.memo(HomeIndex))