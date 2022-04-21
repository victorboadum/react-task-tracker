import './../App.css';
import Button from './Button';


const Header = () => {

  const onClick = () => {
    console.log("hello world")
  }

  return (
    <div>
      <header className="header">

        <div className="header-container">
            <div>
                <h1 className="title">Task Tracker</h1>
            </div>

            <Button onClick={onClick}/>
            
        </div>

    </header>
    </div>
  )
}

export default Header
