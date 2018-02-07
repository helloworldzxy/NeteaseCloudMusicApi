// console.log('sciprt imported');

function loginByPhone() {
  console.log("loginByPhone");
  const phone = $("input[name='phone']").val();
  // console.log('phone = ', phone);
  const password = $("input[name='password_phone']").val();
  // console.log('password = ', password);
  let reqUrl =
    location.origin +
    "/login/cellphone?phone=" +
    phone +
    "&password=" +
    password;
  location.href = reqUrl;
}
