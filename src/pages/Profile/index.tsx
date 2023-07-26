import profileImage from '../../assets/img/profile-image.png';

import { Container} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';
import ListsOnProfile from '../../components/ListsOnProfile';

function Profile() {
  return ( 
    <Container>
      
      <UserProfileHeader
        profileImage={profileImage}
        name="Iuri Silva"
        status="Solteiro, Brasil"
        editProfilePath="/edit-profile"
        buttonContent="Editar perfil"
      />
      <ProfileInfo />
      <ListsOnProfile />

    </Container>
   );
}

export default Profile;