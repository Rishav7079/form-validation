// console.log("project of form validation ");
$("#failure").hide();
$("#success").hide();
const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
nameValidate = false;
emailValidate = false;
phoneValidate = false;
Name.addEventListener("blur", () => {
  // console.log("name is blured");
  let reg = /^[a-zA-Z\s]+$/;
  let str = Name.value;
  // console.log(reg, str);
  if (reg.test(str)) {
    // console.log("your name is valid");
    Name.classList.remove("is-invalid");
    nameValidate = true;
  } else {
    // console.log("your name is not valid");
    Name.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  // console.log("name is blured");
  let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let str = email.value;
  // console.log(reg, str);
  if (reg.test(str)) {
    // console.log("your email is valid");
    email.classList.remove("is-invalid");
    emailValidate = true;
  } else {
    // console.log("your email is not valid");
    email.classList.add("is-invalid");
  }
});
phone.addEventListener("blur", () => {
  // console.log("name is blured");
  let reg = /^\d{10}$/;
  let str = phone.value;
  // console.log(reg, str);
  if (reg.test(str)) {
    // console.log("your phone is valid");
    phone.classList.remove("is-invalid");
    phoneValidate = true;
  } else {
    // console.log("your phone is not valid");
    phone.classList.add("is-invalid");
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  // console.log("you clicked sumbit");
  e.preventDefault();
  // console.log(nameValidate, emailValidate, phoneValidate);
  if (nameValidate && emailValidate && phoneValidate) {
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");
    success.classList.add('show')
    $("#failure").hide();
    $("#success").show();
    email.value=''
    Name.value=''
    phone.value=''
    

  }
  else{
     let failure = document.getElementById("failure");
     let success = document.getElementById("success");
     success.classList.add("show");
     $("#failure").show();
     $("#success").hide();
  }
});
