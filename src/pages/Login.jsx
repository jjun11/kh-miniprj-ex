// 로그인페이지
import { useState } from "react";
import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import imgLogo from "../images/tier_logo.png";
import imgBottom from "../images/nedbank_s.png"; 

const Login = () => {
  const navigate = useNavigate(); // 화면 이동을 위해서 사용하는 hook
  
  //키보드 입력(로그인은 아이디와 패스워드로 구성)
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
  // 오류 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  
  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");
  
  // 팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  // 5~20자리의 영문자, 숫자, 언더스코어(_) 로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeId = (e) => {
    const regexId = /^\w{5,20}$/;
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.")
      setIsId(true);
    }
  };
// 8~25 자리의 숫자+영문자 조합으로 이루어진 문자열이 유효한 패스워드 형식인지 검사하는 정규표현식
const onChangePw = (e) => {
  const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,25}$/;
  const passwordCurrent = e.target.value;
  setInputPw(passwordCurrent);
  if (!passwordRegex.test(passwordCurrent)) {
    setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
    setIsPw(false);
  } else {
    setPwMessage("안전한 비밀번호에요 : )");
    setIsPw(true);
    }
  };

  const onClickLogin = async () => {
    // 로그인을 위한 axios 호출
    const res = await AxiosApi.memberLogin(inputId, inputPw);
    console.log(res.data);
    if (res.data === true) {
      window.localStorage.setItem("userId", inputId); // 브라우저에서 임시로 값을 저장하는 기술
      window.localStorage.setItem("userPw", inputPw); 
      window.localStorage.setItem("isLogin", "TRUE"); 
      navigate("/home");
    } else {
      setModalOpen(true);
    }
  };

  
};

