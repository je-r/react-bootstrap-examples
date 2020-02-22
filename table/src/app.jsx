import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import { Button, Table} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';


const users = [
  {
      email: "jane1@usa.com",
      name: "Jane Doe",
      login: "usa\\jane1"
  },
  {
      email: "jane@usa.com",
      name: "Jane Doe",
      login: "usa\\jane"
  },
  {
      email: "jane@usa.com",
      name: "Jane Doe",
      login: "usa\\jane"
  },
  {
      email: "jane@usa.com",
      name: "Jane Doe",
      login: "usa\\jane"
  },
  {
      email: "jane@usa.com",
      name: "Jane Doe",
      login: "usa\\jane"
  }

  ];

const columns = [{
  dataField: 'email',
  text: 'E-Mail'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'login',
  text: 'Login Name'
}];




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
      

<BootstrapTable keyField='email' 
data={ users } columns={ columns } 
bordered={ true }

headerClasses={'hideHeader'}

/>

      </div>
    );
  }
}

ReactDOM.render(
  <Foo />,
  document.getElementById("root")
);

/*
class App extends React.Component {	
 
    handleClick = () => {
    console.log(this); 
  }
 


  render() {
    return (
      <div className="App">
      <Button onClick={this.handleClick}>
      Show Alert</Button>
   
      
      
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
*/
