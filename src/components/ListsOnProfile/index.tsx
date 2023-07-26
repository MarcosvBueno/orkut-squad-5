import { ContainerFAndC, FriendList, CommunityList } from './style';
import profileImage from '../../assets/img/profile-image.png';
function ListsOnProfile() {
  return (
    <ContainerFAndC>
      <FriendList>
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

      <CommunityList>
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
  );
}

export default ListsOnProfile;
