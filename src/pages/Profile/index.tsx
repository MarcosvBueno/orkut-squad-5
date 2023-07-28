import profileImage from '../../assets/img/profile-image.png';
import SearchIcon from '../../assets/img/Search.svg';
import { Container,InputContainer} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
function Profile() {
  return ( 
    <Container>
      <div className='inputDiv'>
      <InputContainer>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder='Pesquisar no Orkut' />
      </InputContainer>
      </div>
      <div className='profileHeaderDiv'>
      <UserProfileHeader
        profileImage={profileImage}
        name="Iuri Silva"
        status="Solteiro, Brasil"
        editProfilePath="/edit-profile"
        buttonContent="Editar meu perfil"
      />
      </div>
      <div className='ProfileInfoDiv'>
      <ProfileInfo /> 
      </div>

      <div className='ListFriendsDiv'>
      <ListOfFriends />
      </div>
      <div className='ListCommunityDiv'>
      <ListOfCommunity />
      </div>
      
      
     
    </Container>
   );
}

export default Profile;