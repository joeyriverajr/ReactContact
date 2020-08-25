import React from 'react';
//import './../App.css';


const contact = (props) =>{
    return (
      
            <tr>
    <td>{props.id} </td>
     <td>{props.name} </td>
      <td>{props.email}  </td>
      <td>{props.contact} </td>
      
      <button>View</button>
        <button> Update </button>
        <button > Delete </button>    
      </tr>
      
    
     
   
    )


}

export default contact;


// state={
//     post: [],
//     selectedPostId: null
// }

// postSelectHandler = (id) => {
//     this.setState({selectedPostId:id});
// }


//  <Post clicked={() => this.postSelectHandler(post.id)} />;

//  <Fullpost id={this.state.selectedPostId} />