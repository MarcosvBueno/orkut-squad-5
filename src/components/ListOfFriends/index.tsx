import {  FriendList} from './style';
import profileImage from '../../assets/img/profile-image.png';
function ListsOfFriends() {
  return (
    <>
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

      
    </>
  );
}

export default ListsOfFriends;
