
import './App.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';




function App() {
  return (
    <div>


      <div className="container">

        <header className="header">

          <div className="header-container">
            <div>
              <h1 className="title">Task Tracker</h1>
            </div>

            <div>
              <button className="btn-add">
                Add
              </button>
            </div>
          </div>
          
        </header>


        <main className="add-task">
          <form action="">

            <div className="input-section">
              <label>Task:</label> <br />
              <input type="text" placeholder="Add Task" className="text"/>
            </div>

            <div className="input-section">
              <label>Day & time:</label> <br />
              <input type="text" placeholder="Add Task" className="text"/>
            </div>

            <div className="input-section reminder-section">
              <p>Set Reminder:</p> <input type="checkbox" className="checkbox"/>
            </div>

            <div className="input-section btn-save-sec">
              <button type="submit" className="btn-save"> Save Task</button>
            </div>
            
          </form>
        </main>



        <section className="show-task">
          <div  className="show-task-container">
            <div className="task task1">
              <p> Doctor Appointment <AiOutlineCloseCircle style={{color:"red", marginRight:"10px"}}/></p>
              <p>Feb 5th at 2:30pm</p>
            </div>
            <div className="task task2">
              <p> Meeting at School <AiOutlineCloseCircle style={{color:"red", marginRight:"10px"}}/></p>
              <p>Feb 6th at 1:30pm</p>
            </div>
            <div className="task">
              <p> Dinner with Mom <AiOutlineCloseCircle style={{color:"red", marginRight:"10px"}}/></p>
              <p>Feb 8th at 7:00pm</p>
            </div>
          </div>
        </section>



        <footer className="footer">

          <div className="footer-divs">
              &copy; Copyright
          </div>

          <div className="footer-divs">
            <a href="/">About</a> 
          </div>
          
        </footer>

      </div>


    </div>
  );
}

export default App;
