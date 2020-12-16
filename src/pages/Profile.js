import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Profile = (props) => {

  // const [formToggle, setFormToggle] = useState(false);
  

  // useEffect(() => {
  //   EditProfileModel.show
  // })
  let username = localStorage.getItem('username')

  return (
    <div>
    <Navbar
      currentUser={ props.currentUser }
      currentUsername = { props.currentUsername }
      logout = { props.logout }
    />
      <h1>Welcome Netrunner: { username }</h1>
      <button>
        <Link to={ '/join' }>Enter Cyberspace</Link>
      </button>
    </div>
  );
};

export default Profile;