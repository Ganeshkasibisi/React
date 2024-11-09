import User from './User';
import UserContext from '../utils/UserContext';
import {useContext} from 'react';

const About = () => {
    const {loggedInUser} = useContext(UserContext);
    return (<div>
        <h1>About us </h1>
        <h2>This is react food ordering app</h2>
        <User name={loggedInUser} location={"Bangalore"}/>
    </div>
)}
export default About;