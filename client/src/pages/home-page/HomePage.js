import { useEffect, useState } from 'react';
import Post from '../../components/post/Post';


export default function HomePage() {
const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/newPost').then(response => {
response.json().then(posts => {
    setPosts(posts);
});
      });
    }, []);
    return (
        <>
         <div className='entry'>
            <h3>Reading Time <br/>ـــــــــــــ</h3>
             
            </div>
        <div className='posts'>
   {
    posts.length > 0 && posts.map(post => (
       
        <Post {...post}/>
        
    ))
   }
   </div>
        </>
    );
}