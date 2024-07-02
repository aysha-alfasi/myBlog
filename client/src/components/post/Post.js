import { Link } from 'react-router-dom';
import {formatISO9075} from 'date-fns';

export default function Post({_id, title, summary, image, content, createdAt, author
}) {
    return (
        <>
        <div className='content'>
  <div className='image'>
    <Link to={`/post/${_id}`}>
    <img src={'http://localhost:5000/'+image} alt='example image' />
    </Link>
  </div>
  <div className='texts'>
  <Link to={`/post/${_id}`}>
  <h2>{title}</h2>
  </Link>
  <p className='info'>
    <a className='author'>{author.username}</a>
    <time>{formatISO9075(new Date(createdAt))}</time>
  </p>
  <p className='summary'>{summary}</p>
  </div>
    </div>
        </>
    );
}