import './../App.css';



const Button = ({isAddTask, onClick}) => {

  return (
    <div>
      <div>
        <button onClick={onClick} className="btn-add" style={{backgroundColor: `${isAddTask ? 'red' : 'purple'}`}}>
            {isAddTask ? 'Close' : 'Add'}
        </button>
      </div>
    </div>
  )
}

export default Button
