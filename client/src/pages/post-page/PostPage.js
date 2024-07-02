import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        
        console.log(id);
fetch(`http://localhost:5000/newPost/${id}`).then(response => {
response.json().then(postInfo => {
setPostInfo(postInfo);
});
});
    }, []);
    if (!postInfo) return '';

    return (
        <div className="postPage">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">By {postInfo.author.username}</div>
            <div className="image">
            <img src={`http://localhost:5000/${postInfo.image}`} alt='' />
            </div>
            <h1>{postInfo.title}</h1>
            <div className="postContent" dangerouslySetInnerHTML={{__html:postInfo.content}} />
            
        </div>
    );
}