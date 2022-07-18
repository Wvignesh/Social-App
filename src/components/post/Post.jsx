import './post.css';
import React,{useState} from 'react'
import { MoreVert } from '@material-ui/icons';
import {Users} from '../../dummyData'

export default function Post({post}) {

const [like, setLike] = useState(post.like);
const [isliked, setIsliked] = useState(false);

const likehandler=()=> {
  setLike(isliked ? like-1:like+1)
  setIsliked(!isliked)
}
  
  return (
    <div className='post'>

      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u=> u.id=== post?.userId)[0].profilePicture} alt="post-img" className='postProfileImg' />
            <span className="postUsername"> {Users.filter(u=> u.id=== post?.userId)[0].username}  </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
             <MoreVert/>
          </div>

        </div>
        <div className="postCenter">
          <span className="postText">
             {post?.desc}
            <img src={post.photo} className='postImg' alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomleft">
             <img src="assets/like.png" alt="icon" className='likeIcon' onClick={likehandler} />
             <img src="assets/heart.png" alt="icon" className='likeIcon'onClick={likehandler} />
             <span className="postLikeCounter">
              {like}
             </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
       
    </div>
  );
}
