
import './App.css';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import ShowTask from './Components/ShowTask';
import Footer from './Components/Footer';
import About from './Components/About';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import {Routes as Router, Route} from "react-router-dom"



function App() {
  
  //useEffect-dynamic-db-json-CRUD-api
  const [tasks, setTasks] = useState([]);

  //useEffect: used when we want something to happen ryt when the page loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    
    getTasks();

  }, []);

  //fetch tasks
  //make an async-func to await a fetch-api
  const fetchTasks = async ()=>{
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();

    console.log(data);
    return(data);
  }


  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();

    console.log(data);
    return(data);
  }


  //manual-stati-API
  /*const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 4,
            text: 'Gyak Coding',
            day: 'March 5th at 2:30pm',
            reminder: false,
        },
      ]
  )*/

      //delete task
      const deleteTask = async (id)=> {
        console.log('deleteTask', id)

        //db-update:
        await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method: 'DELETE'
        });

        //UI-update:
        setTasks(tasks.filter((task)=>{
          return(task.id !== id);
        }))
      }

      
      //toggleOndbClick
      const toggleOndbClick = async (id)=> {
        console.log('dbClick on: ', id)
        
        //get-db-data:
        const taskToToggle = await fetchTask(id);
        //modify-pulled-db-data:
        const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

        //post-back-modified-db-data:
        const res = await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method:'PUT',
          headers: {
            'Content-type':  'application/json'
          },
          body: JSON.stringify(updatedTask)
        }
        );

        const data = await res.json();

        //update-UI-by-modified-data:
        setTasks(tasks.map((task)=>{
          return(
            task.id === id ? {...task, reminder : data.reminder} : {...task}
          );
        })); 

        /*//UI-update:
        setTasks(tasks.map((task)=>{
          return(
            task.id === id ? {...task, reminder : !task.reminder} : {...task}
          );
        })); */
      }



      //AddTask
      const addTask = async (text, day, reminder)=> {

        //manual-post:
        /*setTasks([...tasks, {id:tasks.length+1, text, day, reminder}]);*/

        //db-post:
        const res = await fetch(`http://localhost:5000/tasks/`,
        {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify({text, day, reminder})
        });

        const data = await res.json();

        console.log(data, '----res----');

        //UI-update of: db-post:
        setTasks([...tasks, data]);

      }


      const [isAddTask, setIsAddTask] = useState(false);

      //toggleAddTaskForm
      const toggleAddTaskForm = ()=> {
        setIsAddTask(!isAddTask);
      }



  return (

      <Router>
        
          <div className="container">


            <Header isAddTask={isAddTask} toggleAddTaskForm={toggleAddTaskForm}/>


            <Routes>
              <Route path="/" element={
              
              <>
                {isAddTask && <AddTask addTask={addTask}/>}

                {tasks.length > 0 ? <ShowTask tasks={tasks} onDelete={deleteTask} toggleOndbClick={toggleOndbClick}/>
                : 'no task to show'}
              </>
              
              } />

          
              <Route path="/about" element={<About/>} />

              <Route path="/task/:id" element={<About/>} />

            </Routes>

            
            <Footer />

          </div>
        
      </Router>

  );
}

export default App;






















/*

{
  "tasks": [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": false
    },
    {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 2:30pm",
        "reminder": false
    },
    {
        "id": 4,
        "text": "Gyak Coding",
        "day": "March 5th at 2:30pm",
        "reminder": false
    }
  ]
  
}

*/ 