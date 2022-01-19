
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
console.log(props)
    if(!props.profile){
        return <div>loading</div>
    }
    
    return (
        <div >
            
                <div className = {s.img}>
                    <img src="https://i1.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/oxygen-nature-header.jpg?ssl=1" />
                </div>
                <div>
                    <img src={props.profile.photos.large || 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'}/>
                    <p>{props.profile.fillName}</p>

                </div>
        </div>
           
     
        
    );
};

export default ProfileInfo;
