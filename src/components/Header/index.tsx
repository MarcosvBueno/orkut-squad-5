import { HeaderWrapper } from "./style";

function Header() {
  return (  
    <HeaderWrapper>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/profile">PROFILE</a></li>
        <li><a href="/register">REGISTER</a></li>
        <li><a href="/edit-profile">EDIT PROFILE</a></li>
      </ul>
    </HeaderWrapper>
  );
}

export default Header;