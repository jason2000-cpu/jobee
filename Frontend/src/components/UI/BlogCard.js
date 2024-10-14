import { Link } from "react-router-dom";
import countTimeFrom from "../../utils/countTimeFrom";

function BlogCard({ post }) {
    return (
        <div className="my-10  h-90">
        <div className="h-60">
            <img src={post.banner_url} alt={post.id} className="h-full w-full" />
        </div>
        <div className="mt-4 space-y-2">
            <div className="text-xs space-x-12">
                <span className="font-bold">{post.category}</span>
                <span>{countTimeFrom(post.created_at)}</span>
            </div>
            <div className="space-y-2">
                <h1 className="font-bold text-xl">{post.title}</h1>
                <p>{post.text}</p>
    
            </div>
        </div>
        <div className='mt-2'>
            <Link to={`/posts/${post._id}`}>Read More...</Link>
        </div>
    </div>
    )
}


export default BlogCard;