import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const User = ({user}) => {
    // eslint-disable-next-line react/prop-types
    const{name,id,email} =user;
    return (
        <div className="text-center border-2 border-yellow-300 p-5 rounded-lg bg-slate-600 w-11/12 mx-auto text-white">
            h4{name}
          <h4>{email}</h4> 
          <h4>{id}</h4> 
          <Link to={`/users/${id}`}><button className="btn btn-error">Show details</button></Link>
        </div>
    );
};


export default User;