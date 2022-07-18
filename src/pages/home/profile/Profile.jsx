import './profile.css';
import Topbar from '../../../components/topbar/Topbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Feed from '../../../components/feed/Feed';
import Rightbar from '../../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <div>
       <Topbar />
<div className='profile'>
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
               
            <img src="assets/posts/3.jpeg" className='profileCoverImg' alt="p-cover-img" />
            <img src="assets/posts/7.jpeg" className='profileUserImg' alt="p-cover-img" />
            </div>

        </div>

        <div className="profileInfo">
            <h4 className='profileInfoName'>Vicky Varner</h4>
            <span className='profileInfoDesc'>Hello my dr Friends  </span>

        </div>
        <div className="profileRightBottom">
              <Feed />
             <Rightbar profile />
        </div>
    </div> 
</div>
    </div>
  );
}
