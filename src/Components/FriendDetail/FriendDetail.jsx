import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'
const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <div className="detail">
                <h1>detail component: {friendId} </h1>
                <h3> Name: {friend.name} </h3>
                <p>Email: {friend.email} </p>
                <p>Phone: {friend.phone} </p>
                <p>Website: {friend.website} </p>
                <p>Website: {} </p>

            </div>
        </div>
    );
};

export default FriendDetail;