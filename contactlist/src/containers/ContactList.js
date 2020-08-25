import React,{Component} from 'react';
import './App.css';  // default css

import {Route,Link} from  'react-router-dom';
import axios from 'axios';


import Addcontact from '../containers/NewContact/Addcontact';
import Contacts from '../components/Contact';


// import View from './Component/View/View';
// import Edit from './Component/Edit/Edit';
// import { Router, Switch ,Route} from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// import history from './Component/View/View';


class ContactList extends Component{
    state = 
    {
        contacts:
        [
            //these were our hard coded dummy data 
        // {id:'1',name:'Maria Anders',email:'maria@test.com',contact:'030-0074321'},
        // {id:'2',name:'Antonio Moreno',email:'antonio@gmail.com',contact:'555-3932'}
        ]
    }

    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          //const contacts = response.data.slice(0, 5);
          // const updateconst = contacts.map(contacts => {
          //   return {
          //     ...contacts
              
          //   }
          // })
            //this.setState({contacts:response.data});
            this.setState({contacts:response.data});
            

            console.log(response);
            });
        }
        


//  manipulation object handlers 
delete = (contactIndex) => {
  const contacts = this.state.contacts;
  contacts.splice(contactIndex, 1)
  this.setState({contacts: contacts});

  
}
//this function only delete from the page 


    render(){
        
      //functions here 

      const contact =  this.state.contacts.map(
          contacts => {
        return  <Contacts 
        Key={contacts.id} id={contacts.id} 
        name={contacts.name} 
        email={contacts.email}
        contact={contacts.phone}/>;
        }
        );
        
        
    //  const content = {
    //      width:'auto',
    //      border:'2px solid black',
    //     };
    // const tr = {
    //     width:'auto',
    //     border:'2px solid black',

    // }; // this has been added to the App.css 
    
    // let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    // if (!this.state.error) {
    //     posts = this.state.posts.map(post => {
    //         return <Post 
    //             key={post.id} 
    //             title={post.title} 
    //             author={post.author}
    //             clicked={() => this.postSelectedHandler(post.id)} />;
    //     });
    // }
    
        return(
          
          
           
             
            <div className = 'header'> 
                <div className="links">
                    <header> 
                        <nav>
                            <ul>
                                <li><Link to="/">Contact list </Link></li> {/*rather than using anchor tags use links so that it wont reload the page   */}
                                <li><Link to="/Addcontact"
                                // {{
                                //     pathname:"/Addcontact",
                                //     hash:"#submit",
                                //     search:'?quick-submit=true'
                                    
                                // }}
                                >Add a Contact</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Route
                    // path='/' exact strict render={
                    //     ()=> {
                    // return (<h1>Contact List</h1>); 
                    // }
                // }
                    path='/' exact strict component={Contacts}
                
                    />
                    <Route
                    path="/Addcontact" exact strict component={Addcontact} 
                    />
                  </div>
              
        
            <table id='customers'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>contact</th>
                <th>Option</th>

                </tr>
              {/* 
               
            {this.state.contacts.map(contacts =>{
                    return  <tr> 
                   <td> <Contacts 
                    Key={contacts.id} id={contacts.id}  >    </Contacts> </td>
                   <td><Contacts name={contacts.name} ></Contacts> </td>
                   <td><Contacts email={contacts.email} ></Contacts></td>
                   <td><Contacts phone={contacts.phone} ></Contacts></td>
                   
                 
              
                    <button>View</button>
                   <button> Update </button>
                   <button onClick={this.delete}> Delete </button>    
            {/* this is only rendered on the page}*/}
                  
                
                    {/* </tr> */} 
                {/* //   })} */}
                {contact}
      

                  </table>
                 
                
        </div>
        )
    }
}

export default ContactList;