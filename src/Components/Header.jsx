import './../App.css';
import Button from './Button';
import {useLocation} from 'react-router-dom'


const Header = ({isAddTask, toggleAddTaskForm}) => {

  /*const onClick = () => {
    console.log("hello world")
  }*/

  const location = useLocation();
  //const {pathname} = location;
  //const {pathname} = useLocation();



  return (
    <div>
      <header className="header">

        <div className="header-container">
            <div>
                <h1 className="title">Task Tracker</h1>
            </div>

            { location.pathname === "/" &&
              <Button isAddTask={isAddTask} onClick={()=> toggleAddTaskForm()}/>
            }
        </div>

    </header>
    </div>
  ) 
}

export default Header
