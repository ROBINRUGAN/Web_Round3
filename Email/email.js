var email = document.querySelector("#email");
var password = document.querySelector("#password");
var repassword = document.querySelector("#repassword");
var infoemail = document.querySelector(".checkemail");
var infopassword = document.querySelector(".checkpwd");
var inforepassword = document.querySelector(".checkrepwd");
var button = document.querySelector(".button")
email.oninput = function(){
    var value = email.value;
    var res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(res.test(value)==true)
    {
        infoemail.innerHTML = ""
    }
    else
    {
        infoemail.innerHTML = "邮箱格式不正确！！"
    }
}
password.oninput = function(){
    var value = password.value;
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    var res = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if(res.test(value)==true)
    {
        infopassword.innerHTML = ""
    }
    else
    {
        infopassword.innerHTML = "密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
    }
}
repassword.oninput = function(){
    if(password.value != repassword.value)
    {
        inforepassword.innerHTML = "两次密码不一致！！"
    }
    else 
    {
        inforepassword.innerHTML = ""
    }
}
button.onclick = function(){
    if(email.value&&inforepassword.innerHTML==""&&infoemail.innerHTML==""&&infopassword.innerHTML=="")
    alert("注册成功辣！ヾ(≧▽≦*)o")
    else if(email.value=="")
    alert("邮箱不能为空！o(≧口≦)o")
    else if(password.value=="")
    alert("密码不能为空！o(≧口≦)o")
    else
    {
        if(infoemail.innerHTML != "")
        alert("qwq邮箱格式不正确！o(≧口≦)o")
        else if(infopassword.innerHTML != "")
        alert("qwq密码格式不正确！o(≧口≦)o")
        else if(inforepassword.innerHTML != "")
        {
            alert("qwq两次密码不一样！o(≧口≦)o")
        }
    }
}
