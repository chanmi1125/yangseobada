var s_regExp = /^[0-9]{5}$/; //학번체크 정규식
var m_regExp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; //이메일 체크 정규식
var p_regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //비밀번호 체크 정규식(8~16자 영문 숫자)
var n_RegExp = /^[가-힣]{2,15}$/; //이름 체크 정규식
var objSn = document.getElementById("sn");
var objName = document.getElementById("name");
var objMail = document.getElementById("mail");
var objPwd1 = document.getElementById("pwd1");
var objPwd2 = document.getElementById("pwd2");
