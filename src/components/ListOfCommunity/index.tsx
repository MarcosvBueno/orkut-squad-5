import {CommunityList,} from './style';
import profileImage from '../../assets/img/profile-image.png';
function ListsOfCommunity() {
  return (
    <>
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
    </>
  );
}

export default ListsOfCommunity;
