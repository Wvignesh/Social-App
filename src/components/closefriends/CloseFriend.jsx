import './closefriend.css';

export default function CloseFriend({datas}) {
  return (
    <div>
        <li className="sidebarFriend">
          <img src={datas.profilePicture} alt='' className='sidebarFriendImage'  />
          <span className='sidebarFriendName'>{datas.username} </span>
       </li>
    </div>
  );
}
