import { Link } from 'react-router-dom';
import {formatISO9075} from 'date-fns';
import classes from './Post.module.css';

export default function Post({_id, title, summary, image, createdAt, author
}) {
    return (
        <>
<div className={classes.whole}>
    <Link to={`/post/${_id}`}>
    <img className={classes.image} src={'http://localhost:5000/'+image} alt='example image' />
    </Link>
    <div className={classes.texts}>
  <Link to={`/post/${_id}`}>
  <h2>{title}</h2>
  </Link>
  <p className={classes.info}>
    <a className={classes.author}>{author.username}</a>
    <time>{formatISO9075(new Date(createdAt))}</time>
    </p>
  <p className={classes.summary}>{summary}</p>
  </div>
  </div>
        </>
    );
}