import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDownBox from'./components/dropdownbox.js';
import registerServiceWorker from './registerServiceWorker';
import TopNav from './content/topnav/topnav.js';
import LoginControl from './content/topnav/test.js';
import Calculator from './content/temperature/temperconvert';
import FilterableProductTable from './content/producttable/producttable.js';
import TodoMVC from './content/todomvc/todoMVC';
import TODOAPP from './content/todo-redux/TODOAPP'

ReactDOM.render(<div>
    {/*<TopNav />
     <LoginControl />
     <Calculator />
     <FilterableProductTable  />*/
        /* <TODOAPP /> */
    }
  
   <TodoMVC  />

</div>, document.getElementById('root'));
registerServiceWorker();
