if(document.getElementById("ID").value == ''){
    alert("아이디를 입력해주세요");
    document.getElementById("ID").focus()
    return false;
}
if(document.getElementById("ID").length > 10 )
