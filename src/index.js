import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDownBox from'./components/dropdownbox.js';
import registerServiceWorker from './registerServiceWorker';
import TopNav from './content/topnav/topnav.js';
import LoginControl from './content/topnav/test.js';
import Calculator from 'content/temperature/temperconvert.js';
import FilterableProductTable from './content/producttable/producttable.js';
import TodoMVC from './content/todomvc/todoMVC';

ReactDOM.render(<div>
    {/*<TopNav />
     <LoginControl />
     <Calculator />
     <FilterableProductTable  />*/
    }
    <TodoMVC  />

</div>, document.getElementById('root'));
registerServiceWorker();
