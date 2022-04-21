import './../App.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';



const Tasks = ({tasks, onDelete, toggleOndbClick}) => {
  return (
    <div>

        {tasks.map((task, key) => {
            return(<div key={task.id} onDoubleClick={()=> toggleOndbClick(task.id)} className={`task ${task.reminder ? 'border-left-task' : ''}`}>
                <p> {task.text} <AiOutlineCloseCircle
                  onClick={()=> onDelete(task.id)} 
                  className="hover-icon" style={{color:"red", marginRight:"10px"}}/></p>
                <p>{task.day}</p>
            </div>)
        })}
        
    </div>
  )
}

export default Tasks
