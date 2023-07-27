import EditForm from '../../components/EditForm';
import { Container, ProfileSide, ProfileInfo} from './style';
import profileImage from '../../assets/img/profile-image.png';

function EditProfile() {
  return ( 
    <Container>
      <ProfileSide>
        <ProfileInfo>
          <img src={profileImage} alt=''/>
          <h2>Iuri Silva</h2>
          <p>Solteiro, Brasil</p>
        </ProfileInfo>
        <button>Salvar</button>
      </ProfileSide>
      <EditForm/>
    </Container>
   );
}

export default EditProfile;