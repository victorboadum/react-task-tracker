import { useState, useEffect } from 'react';
import Button from './Button';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';


//NOTE: either: you use a <Navigate/>-redirect-Component-Link to= a given Route('/')
//or: use: the useNavigate()_obj, instantiated to receive a redirect-Route('/') as param
 
const TaskDetails = () => {

    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    const [error, setError] = useState(null);  

    const params = useParams();
    console.log(params.id);
    const navigate = useNavigate(); //used for redirects for various auth success, failures & reasons
    //const location = useLocation();
    //const {pathname} = location;
    const {pathname} = useLocation(); //get the pathname of the current_Route/_page

    useEffect(() =>{
        const fetchTask = async ()=>{
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
            const data = await res.json();
            
            //check for error, eg: '/tasks/anything-anonymous'
            if(res.status === 404){
                
                navigate('/')

                setError('task not found'); //use to auth <Navigate/>-redirect-Component alt
            }

            setTask(data);
            setLoading(false);
        }

        fetchTask();
    }, []);
 
    /*//DONT: use the <Navigate/>-redirect-Component, when: using the useNavigate()_obj as alternative
    if(error) { //redirect/navigate-back to a given location/route(eg: '/'), if: anything anonymous entered
        console.log(error);
        return <Navigate to='/' /> //return it by a return-keyword(return): to complete the whole-rendering of the Component-func
                                   //to avoid: the return-keyword below from rendering or return an additional functionality
    }*/

  return (
    <div>
        {
            loading ? (
                <h3>Loading...</h3>  
            ) : (
                <div>
                    <p>{pathname}</p>
                    <h3>{task.text}</h3>
                    <p>{task.day}</p>
                    <Button text='Go Back' onClick={()=>{
                        navigate('/'); //or: navigate(-1) or navigate(-2) - to go backwards in a given amount of pages
                                       //or: navigate(1) or navigate(2) - to go forwards in a given amount of backed-pages
                    }}/>
                </div>
            )
        }
    </div>
  )
}

export default TaskDetails
























