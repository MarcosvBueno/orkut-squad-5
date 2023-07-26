import { Container, ProfileSide, ProfileInfo, EditForm, Details} from './style';
//import profileImage from '../../assets/img/profile-image.png';

function EditProfile() {
  return ( 
    <Container>

      

      <ProfileSide>
        <ProfileInfo>
    
          <h2>Iuri Silva</h2>
          <p>Solteiro, Brasil</p>
        </ProfileInfo>
        <button>Salvar</button>
      </ProfileSide>

      <EditForm>
        <div>
          <h2>Relacionamento: </h2>
          <p>Solteiro</p>
        </div>
        <div>
          <h2>Aniversário:</h2>
          <p>21 de julho</p>
        </div>
        <div>
          <h2>Idade:</h2>
          <p>22</p>
        </div>
        <div>
          <h2>Interesses no Orkut:</h2>
          <p>Solteiro</p>
        </div>
        <div>
          <h2>Quem sou eu:</h2>
          <p>Programador</p>
        </div>
        <div>
          <h2>Filhos:</h2>
          <p>Não</p>
        </div>
        <div>
          <h2>Sexo:</h2>
          <p>Masculino</p>
        </div>
        <div>
          <h2>Fumo:</h2>
          <p>Não</p>
        </div>
        <div>
          <h2>Bebo:</h2>
          <p>Depende do dia</p>
        </div>
        <div>
          <h2>Moro:</h2>
          <p>Guarantã</p>
        </div>
        <div>
          <h2>País:</h2>
          <p>Brasil</p>
        </div>
        <div>
          <h2>Cidade natal:</h2>
          <p>São Paulo</p>
        </div>
        <Details>
          <div>
            <h2>Músicas:</h2>
            <p>Trap </p>
            <p>Rap </p>
            <p>Indie </p>
            <button>Ver todos</button>
          </div>
          <div>
            <h2>Filmes:</h2>
            <p>A rede social</p>
            <p>Meu amigo totoro</p>
            <button>Ver todos</button>
          </div>
        </Details>
        
      </EditForm>

    </Container>
   );
}

export default EditProfile;