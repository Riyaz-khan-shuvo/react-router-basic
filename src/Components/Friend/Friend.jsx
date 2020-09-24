import React from 'react';
import {Link, useHistory } from 'react-router-dom'
const Friend = (props) => {
    const {name , email , id}= props.friend;
    const history = useHistory();
    const handleClick = (id) =>{
        history.push(`/friend/${id}`)
    }
    const friendStyle = {
        border: ' 1px solid red', 
        margin:'25px', 
        padding: '25px',
        borderRadius:'25px'
    };
    return (
        <div style={friendStyle}>
            <h2>Name : { name} </h2>
            <p>Email: {email} </p>
            <Link to={`/friend/${id}`}>
                <button>Show detail of {id} </button>
            </Link>
            <button onClick={()=> handleClick(id)}>Click here</button>
            {/* the link and the button works are same */}
        </div>
    );
};

export default Friend;