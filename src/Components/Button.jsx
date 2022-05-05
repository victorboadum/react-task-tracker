import './../App.css';



const Button = ({isAddTask, onClick, text = 'Add'}) => {

  return (
    <div>
      <div>
        <button onClick={onClick} className="btn-add" style={{backgroundColor: `${isAddTask ? 'red' : 'purple'}`}}>
            {isAddTask ? 'Close' : text}
        </button>
      </div>
    </div>
  )
}

export default Button
