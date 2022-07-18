import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightBar = ()=> {
     return (
      
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" className='birthdayImg' alt="r-img" />
          <span className="birthdayText">
            <strong> Ajithram</strong> and <strong>3 other friends</strong> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" className='rightbarAd' alt="ad-img" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          
          {
            Users.map((u)=> {
              return <Online key={u.id} user={u} />
            })
          }

        </ul>
      </>

     )
  }
const ProfileRightbar = ()=> {

  return (
     <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            City:
          </span>
          <span className="rightbarInfoValue">
            Chennai
          </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            From:
          </span>
          <span className="rightbarInfoValue">
            Chennai
          </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            Relationship:
          </span>
          <span className="rightbarInfoValue">
            Single
          </span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
         
        <div className="rightbarFollowing">
          <img src="assets/persons/p-1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
     </>
  )
}

  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">

       
        {
          profile ?  <ProfileRightbar />:  <HomeRightBar />
        }
       
       </div>
      
      </div>
  )
}
