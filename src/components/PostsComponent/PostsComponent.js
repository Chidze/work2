import { useState } from 'react';
import styles from './PostsComponent.module.css'
import ShowInfoComponent from '../ShowInfoComponent/ShowInfoComponent';

const PostsComponent = ({ post} ) => {
    const [showInfo, setShowInfo] = useState(false);
  

    return (
        <div className={styles.post}>
          <div><b>id:</b> {post.id}</div>
          <div><b>title:</b> {post.title}</div>
          <button className={styles.button} onClick={() => setShowInfo(!showInfo)}>Show Info</button>
          {showInfo && <ShowInfoComponent body={post.body} />}
        </div>
    );
}

export default PostsComponent;