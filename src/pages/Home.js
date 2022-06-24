import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home  = () => {

    const [counter, setCounter] = useState(10)   
    const navigate = useNavigate()

    console.log('In Home')

    useEffect(() => {
        const id = setTimeout(() => {
            setCounter(prev => prev - 1);
            console.log(setCounter);

            if(counter <= 0){
                //navigate
                navigate('/login')
            }

        }, 1000);
         return () => {
             clearTimeout(id)
         }
    }, [counter])



    return(

        <main>
            <h1>Home Page</h1>

            <h2 >Counter: {counter}</h2>

            <Link to='/login'>Go to Login</Link>

        </main>
    )
}

export default Home

/**
 * Using useEffect without dependency has same effect as function code being inside container block
 * - On page load - its executed after dom is rendered
 * - on state change - its executed after dom is rendered
 * 
 * Using with []
 * - On page load - its executed after dom is rendered
 * - on state change - Its not executed
 * 
 * Using with [stateVariable]
 * - On page load - its executed after dom is rendered
 * - On dependency state change - Its executed
 *  
 * Using with [stateVariable] and clean up function
 * - On page load - its executed NOT after dom is rendered
 * - On dependency state change - Its clean up function is executed before rest
 * - on dom unmounting - only clean up function is executed
 * 
 * Using with [] and clean up function
 * - On page load - its executed NOT after dom is rendered
 * - On  state change - Its not executed
 * - on dom unmounting - only clean up function is executed
  

* 
 */