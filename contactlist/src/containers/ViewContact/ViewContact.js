import React,{Component} from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css';


class ViewContact extends Component{

  
        render(){
            const style = {
                padding: '30px',
                background: '#ececec'
            }
            ReactDOM.return (
            // <div className="site-card-border-less-wrapper">
            <div style={style}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            </div>
        )
    }
    
}
    
    


export default ViewContact;