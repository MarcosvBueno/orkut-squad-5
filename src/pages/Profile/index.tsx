import profileImage from '../../assets/img/profile-image.png';
import SearchIcon from '../../assets/img/Search.svg';
import { Container,InputContainer,ContainerFAndC} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
function Profile() {
  return ( 
    <Container>
      <div className='div0'>
      <InputContainer>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder='Pesquisar no Orkut' />
      </InputContainer>
      </div>
      <div className='div1'>
      <UserProfileHeader
        profileImage={profileImage}
        name="Iuri Silva"
        status="Solteiro, Brasil"
        editProfilePath="/edit-profile"
        buttonContent="Editar meu perfil"
      />
      </div>
      <div className='div2'>
      <ProfileInfo /> 
      </div>

      <div className='div3'>
      <ListOfFriends />
      </div>
      <div className='div4'>
      <ListOfCommunity />
      </div>
      
      
     
    </Container>
   );
}

export default Profile;