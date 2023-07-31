import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileSide} from "./style";
import UserProfileHeader from '../../components/UserProfileHeader';
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
function EditProfile() {


  const {setUserIsLogged, modalIsVisible, setModalIsVisible} = useContext(UserContext)!;

  function handleModal() {
    setModalIsVisible(true)
  }

  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  return (
    <>
    <Container>
      <ProfileSide>
      <UserProfileHeader
        name="Iuri Silva"
        status="Solteiro, Brasil"
        buttonContent="Salvar"
        handleButton={handleModal}
      />
      </ProfileSide>
      <EditForm />
    </Container>
    {modalIsVisible && <Modal imageLogo={""} text={"Informações alteradas ✔"} buttonContent={"Voltar para o perfil"} buttonLink={"/profile"} />}
    </>
  );
}

export default EditProfile;
