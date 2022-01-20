import React from 'react';
import UserPostComponent from "../userPostComponent/UserPostComponent";


const emptyResp = 'chooseUser';

const UserComponent = ({chosenUserObj}) => {
    return (
        <div className='user-details'>

            <div>
                <h2>User details</h2>
                <h2>Name of user: {chosenUserObj?.name || emptyResp}</h2>
                <h3>Username: {chosenUserObj?.username || emptyResp}</h3>
                <h3>User adress:
                    <br/>
                    Street - {chosenUserObj?.address?.street || emptyResp};
                    <br/>
                    Suite - {chosenUserObj?.address?.suite || emptyResp};
                    <br/>
                    City - {chosenUserObj?.address?.city || emptyResp};
                    <br/>
                    Zipcode - {chosenUserObj?.address?.zipcode || emptyResp}.</h3>
                <h3>User Email: {chosenUserObj?.email || emptyResp}</h3>
                <h3>User phone: {chosenUserObj?.phone || emptyResp}</h3>
            </div>

            <button onClick={() => <UserPostComponent/>}>show user posts</button>

        </div>
    );
};

export default UserComponent;