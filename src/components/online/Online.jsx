import './online.css';

export default function Online({user}) {
  return (
    <div>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} className='rightbarProfileImg' alt="" />
              <span className="rightBarOnline">

              </span>
              <span className="rightbarUserName">
                {user.username}
              </span>
            </div>
          </li>
          
    </div>
  );
}
