import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {  }
  
  render() { 
    return ( <div>Hi there!</div> );
  }
}
 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

