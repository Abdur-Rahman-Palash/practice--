import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    
    const users = useLoaderData();
    return (
        <div className="text-center">
            <h1>Our users :{users.length}</h1>
            <div className="text-center grid grid-cols-3 gap-8">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
          
        </div>
    );
};

export default Users;