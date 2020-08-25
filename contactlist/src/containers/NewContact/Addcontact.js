import React, {Component} from 'react';
// import axios from 'axios';
import {Card} from 'antd';
import 'antd/dist/antd.css'; 
import './Addcontact.css';


class Addcontact extends Component{
    
    render(){
        // const card = {
        //     textAlign:'center',
        //     // width:300,
        //     // alignitems:'center',
        //     // justifycontent:'center' 
            
            
        // }
        return(
          <div>
            <Card  title="Add a Contact" extra={<button>Submit</button>} >
              <p>Name</p>
              <input type='text'/>
              <p>Email</p>
              <input type='text'/>
              <p>Phone</p>
              <input type='text'/>
            </Card>
            
          </div>
        
        
            

        )
    }
    

}
export default Addcontact;