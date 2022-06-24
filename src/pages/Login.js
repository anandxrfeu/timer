import {Link} from 'react-router-dom'

const Login  = () => {

    console.log(('In Login'))

    return(
        <main>
            <h1>Login Page</h1>

            <Link to='/home'>Go to Home</Link> 

        </main>
    )
}

export default Login