// Home 화면
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png"


const Home = () => {

  const navigete = useNavigate();
  const onClickBtn  = num => {
    switch (num) {
      case 1: navigete("/memberlist"); break;
      case 2: break;
      case 3: break;
      case 4: navigete("/setting"); break;
      default:
    }
  }

  return (
    <>
    <div>
    <ButtonContainer>
      <TransBtn onClickBtn={() => onClickBtn(1)}>회원리스트</TransBtn>
      <TransBtn onClickBtn={() => onClickBtn(2)}>뉴스 보기</TransBtn>
      <TransBtn onClickBtn={() => onClickBtn(3)}>사진 업로드</TransBtn>
      <TransBtn onClickBtn={() => onClickBtn(4)}>테마 변경</TransBtn>
    </ButtonContainer>
    </div>
    <div className="bglogo">
      <img src={imgButton} alt="NedBank" />
    </div>
    </>
  );
}
export default Home;