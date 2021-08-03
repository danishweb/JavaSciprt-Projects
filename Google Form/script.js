function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    document.getElementById("name_element").style.border = "1px solid red";
    document.querySelector(".fill_data").style.display = "flex";

    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    document.getElementById("name_element").style.border = "1px solid red";
    document.querySelector(".fill_data").style.display = "flex";
    return false;
  }
  return true;
}
function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    document.getElementById("phone_element").style.border = "1px solid red";
    return false;
  }

  if (!phone.match(/^[0]?[789]\d{9}$/)) {
    document.getElementById("phone_element").style.border = "1px solid red";
    return false;
  }

  return true;
}

function validateEmail() {
  var mail = document.getElementById("mail").value;
  if (mail.length == 0) {
    document.getElementById("email_element").style.border = "1px solid red";
    return false;
  }

  if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.getElementById("email_element").style.border = "1px solid red";
    return false;
  }

  return true;
}
function validateAddress() {
  var address = document.getElementById("address").value;
  if (address.length == 0) {
    document.getElementById("address_element").style.border = "1px solid red";
    return false;
  }

  if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.getElementById("address_element").style.border = "1px solid red";
    return false;
  }

  return true;
}

function validateForm() {
  if (
    !validateName() &&
    !validatePhone() &&
    !validateEmail() &&
    !validateAddress()
  ) {
    const wrong = document.querySelectorAll(".fill_data");
    for (let i = 0; i < wrong.length; i++) {
      wrong[i].style.display = "flex";
    }

    return false;
  } else {
    submitted = true;
    return true;
  }
}
