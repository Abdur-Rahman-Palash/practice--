import { Link, useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post =useLoaderData();
    const{id,body}=post;
    const navigate = useNavigate();
    const handleGoBack =()=>{
    navigate(-1);
    }
    return (
        <div>
            <h1>Post Details : {id}</h1>
            <h3>{body}</h3>
            <Link><button onClick={handleGoBack} className="btn btn-success">Go Back</button></Link>
        </div>
    );
};

export default PostDetails;