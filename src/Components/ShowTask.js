import './../App.css';
import Tasks from './Tasks';



const ShowTask = ({tasks, onDelete, toggleOndbClick}) => {

    


    return (
        <div>
            <section className="show-task-section">
                <div  className="show-task-container">

                    
                    <Tasks tasks={tasks} onDelete={onDelete} toggleOndbClick={toggleOndbClick}/>

                    
                </div>
            </section>
        </div>
    )
}

export default ShowTask
