import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import { Button, Spinner} from 'react-bootstrap';




class Foo extends React.Component{
 handleClick(event){
    //console.log(this);
     var theLog = document.getElementById("theLog");
     theLog.value = "test"+ new Date();
     
     
  }
 
 
  render(){
    return (
      <div>
      <input type="text" size="115" id="theLog" name="fname">
      </input>
          <div id="bad">loaded</div>
      <Button type="button" onClick={(e) => this.handleClick(e)}>
        Click Me
      </Button>
      <br/><br/><br/>
      <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
      </div>
    );
  }
}

ReactDOM.render(
  <Foo />,
  document.getElementById("root")
);

