import './topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
       <div className='topbarLeft'>
     <span className='logo'>Vsocial </span>

       </div>
 
        <div className='topbarCenter'>
             <div className='searchbar'>
               <Search  className='searchIcon'/>
               <input className='searchInput' placeholder='Search for friend, post or video'  />
             </div>
       </div>   


        <div className='topbarRight'>
            <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>TimeLine</span>
            </div>
            <div className='topbarIcons'>
               <div className='topbarIconItem'>
                 <Person />
                 <span className='topbarIconBadge'>1</span>
               </div>
               <div className='topbarIconItem'>
                 <Chat />
                 <span className='topbarIconBadge'>1</span>
               </div>
               <div className='topbarIconItem'>
                 <Notifications />
                 <span className='topbarIconBadge'>1</span>
               </div>
            </div>
            <div>
                <img src="/assets/persons/p-1.jpeg" alt="topbar-img" className='topbarImage'  />
               </div>
        </div>
    </div>
  );
}
