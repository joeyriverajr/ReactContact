import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


{/* <div className='Links'>
<form action= '#'>
<label> name </label> <br></br>
<input placeholder='enter here' /> <br></br>

<label> email </label> <br></br>
<input placeholder='enter here' /> <br></br>

<label> contact </label> <br></br>
<input placeholder='enter here' /> <br></br>
<input type="submit"></input>

    </form>

</div> */}