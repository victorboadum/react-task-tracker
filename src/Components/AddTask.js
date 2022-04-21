import './../App.css';
import {useState} from 'react'


  const AddTask = ({addTask}) => {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (le) => {
    
    le.preventDefault(); 

    if(text.length > 0 & day.length > 0){
      console.log({text, day, reminder}); 

      addTask(text, day, reminder); 
      
      setText(''); 
      setDay(''); 
      setReminder(false);
    }
    
    
  }

  return (
    <div>

        <main className="add-task" >
          <form  onSubmit={onSubmit}>

            <div className="input-section">
              <label>Task:</label> <br />
              <input type="text" onChange={(le)=> setText(le.target.value)} value={text} placeholder="Add Task" className="text"/>
            </div>

            <div className="input-section">
              <label>Day & time:</label> <br />
              <input type="text" onChange={(le)=> setDay(le.target.value)} value={day} placeholder="Add Task" className="text"/>
            </div>

            <div className="input-section reminder-section">
              <p>Set Reminder:</p> <input type="checkbox" checked={reminder} onChange={(le)=> setReminder(le.currentTarget.checked)} value={reminder} className="checkbox"/>
            </div>

            <div className="input-section btn-save-sec">
              <button type="submit"   className="btn-save"> Save Task</button>
            </div>
            
          </form>
        </main>
      
    </div>
  )
}

export default AddTask
