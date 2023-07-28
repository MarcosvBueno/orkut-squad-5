import EditForm from "../../components/EditForm";
import { Container, ProfileSide} from "./style";
import profileImage from "../../assets/img/profile-image.png";
import UserProfileHeader from '../../components/UserProfileHeader';

function EditProfile() {
  return (
    <Container>
      <ProfileSide>
      <UserProfileHeader
        profileImage={profileImage}
        name="Iuri Silva"
        status="Solteiro, Brasil"
        editProfilePath="/profile"
        buttonContent="Salvar"
      />
      </ProfileSide>
      <EditForm />
    </Container>
  );
}

export default EditProfile;
