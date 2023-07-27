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

      <InputContainer>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder='Pesquisar no Orkut' />
      </InputContainer>
      <UserProfileHeader
        profileImage={profileImage}
        name="Iuri Silva"
        status="Solteiro, Brasil"
        editProfilePath="/edit-profile"
        buttonContent="Editar meu perfil"
      />
      <ProfileInfo /> 
      <ContainerFAndC>
      <ListOfFriends />
      <ListOfCommunity />
      </ContainerFAndC>
     
    </Container>
   );
}

export default Profile;