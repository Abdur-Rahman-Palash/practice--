import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // eslint-disable-next-line react/prop-types
    const {userId,id,title,body} =post;
    return (
        <div className="text-center border-2 border-yellow-300 p-5 rounded-lg bg-slate-600 w-11/12 mx-auto text-white">
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
          <Link to={`/post/${id}`}><button className="btn btn-secondary">Post Detail</button></Link>
        </div>
    );
};

export default Post;