import profileImage from '../../assets/img/profile-image.png';
import starIcon from '../../assets/img/Star.svg';
import heartIcon from '../../assets/img/Heart.svg';
import smileyIcon from '../../assets/img/Smiley.svg';
import thumbsUpIcon from '../../assets/img/ThumbsUp.svg';
import { UserProfile,ProfileHeader,Container,ProfileInfo,PhraseContainer,QualitiesContainer,
StarContainer,PersonalInformation, UserInterests,FriendList,ContainerFAndC ,CommunityList} from './style';

import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate();

  return ( 
    <Container>

      <ProfileHeader>
        <UserProfile>
          <img src={profileImage} alt="" />
            <h2>Iuri Silva</h2>
            <p>Solteiro,Brasil</p>
        </UserProfile>
        <button onClick={() => navigate('/edit-profile')}>Editar meu perfil</button>
      </ProfileHeader>

      <ProfileInfo>
        <h2>Boa tarde,  Iuri Silva</h2>
        <PhraseContainer>
          <p>Programar sem café é igual poeta sem poesia.</p>
        </PhraseContainer>
      
        <QualitiesContainer>

          <div>
            <h3>Fãs</h3>
            <StarContainer>
            <img src={starIcon} alt="" />
            <p>85</p>
            </StarContainer>
          </div>

          <div>
          <h3>Confiável</h3>
            <img src={smileyIcon} alt="" />
            <img src={smileyIcon} alt="" />
          </div>

          <div>
          <h3>Legal</h3>
          <img src={thumbsUpIcon} alt="" />
          <img src={thumbsUpIcon} alt="" />
          <img src={thumbsUpIcon} alt="" />
          </div>

          <div>
          <h3>Sexy</h3>
            <img src={heartIcon} alt="" />
            <img src={heartIcon} alt="" />
          </div>
          
        </QualitiesContainer>
        

      <PersonalInformation>

        <div>
          <h3>Relacionamento:</h3>
          <p>Solteiro</p>
        </div>
        <div>
          <h3>Aniversário:</h3>
          <p>21 de julho</p>
        </div>
        <div>
          <h3>Idade:</h3>
          <p>22</p>
        </div>
        <div>
          <h3>Interesses no Orkut:</h3>
          <p>Solteiro</p>
        </div>
        <div>
          <h3>Quem sou eu:</h3>
          <p>Programador</p>
        </div>
        <div>
          <h3>Filhos:</h3>
          <p>Não</p>
        </div>
        <div>
          <h3>Sexo:</h3>
          <p>Masculino</p>
        </div>
        <div>
          <h3>Fumo:</h3>
          <p>Não</p>
        </div>
        <div>
          <h3>Bebo:</h3>
          <p>Depende do dia</p>
        </div>
        <div>
          <h3>Moro:</h3>
          <p>Guarantã</p>
        </div>
        <div>
          <h3>País:</h3>
          <p>Brasil</p>
        </div>
        <div>
          <h3>Cidade natal:</h3>
          <p>São Paulo</p>
        </div>
        
        <UserInterests>
        <div>
          <h3>Músicas:</h3>
          <p>Trap</p>
          <p>Rap</p>
          <p>Indie</p>
          <button>Ver todos</button>
        </div>
        <div>
        <h3>Filmes:</h3>
          <p>A rede social</p>
          <p>Meu amigo Totoro</p>
          <button>Ver todos</button>
        </div>
      </UserInterests>
      </PersonalInformation>
      </ProfileInfo>

    <ContainerFAndC >
      <FriendList >
        <div>
          <h3>Amigos (248)</h3>
          <button>Ver todos</button>
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Fernando</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Ana</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Carlos</p>
          </div>
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Vitor</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Matheus</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Ramos</p>
          </div>
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Eiji</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Julia</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Carol</p>
          </div>
        </div>

      </FriendList>


      <CommunityList >

        <div>
          <h3>Comunidade (42)</h3>
          <button>Ver todos</button>
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Carros</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Desenhos</p>
          </div>
          <div> 
          <img src={profileImage} alt="" />
          <p>Crazy</p>
          </div>
         
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Fofos</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Animes</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Leitura</p>
          </div>
        </div>

        <div>
          <div>
          <img src={profileImage} alt="" />
          <p>Meu ovo</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>My books</p>
          </div>
          <div>
          <img src={profileImage} alt="" />
          <p>Cafeeee</p>
          </div>

        </div>

      </CommunityList>
    </ContainerFAndC>
    </Container>
   );
}

export default Profile;