import './../App.css';



const Button = ({onClick}) => {

  return (
    <div>
      <div>
        <button onClick={onClick} className="btn-add">
            Add
        </button>
      </div>
    </div>
  )
}

export default Button
