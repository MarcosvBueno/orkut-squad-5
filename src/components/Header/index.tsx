import { HeaderWrapper } from "./style";
import logo from "../../assets/img/logo-orkut.svg";
function Header() {
  return (  
    <HeaderWrapper>
      <div>
        <img src={logo} alt="" />
        <nav>
          <a href="/">Sobre o Orkut</a>
          <a href="/">Centro de segurança</a>
        </nav>
      </div>
    </HeaderWrapper>
  );
}

export default Header;