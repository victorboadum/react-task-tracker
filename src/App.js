
import './App.css';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import ShowTask from './Components/ShowTask';
import Footer from './Components/Footer';
import {useState} from "react";



function App() {

  const [tasks, setTasks] = useState(
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
  )

      //delete task
      const deleteTask = (id)=> {
        console.log('deleteTask', id)
        setTasks(tasks.filter((task)=>{
          return(task.id !== id);
        }))
      }

      //ondbClick
      const toggleOndbClick = (id)=> {
        console.log('dbClick on: ', id)
        setTasks(tasks.map((task)=>{
          return(
            task.id === id ? {...task, reminder : !task.reminder} : {...task}
          );
        }))
      }

      //AddTask
      const addTask = (text, day, reminder)=> {
        setTasks([...tasks, {id:tasks.length+1, text, day, reminder}]);
      }

              //tasks.length+1
  return (
    <div>


      <div className="container">


        <Header />
      
        <AddTask addTask={addTask}/>

        {tasks.length > 0 ? <ShowTask tasks={tasks} onDelete={deleteTask} toggleOndbClick={toggleOndbClick}/>
        : 'no task to show'}
        
        <Footer />

      </div>


    </div>
  );
}

export default App;
