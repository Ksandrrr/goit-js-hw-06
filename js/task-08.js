
const form = document.querySelector(`.login-form`)




form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password,}
  } = event.currentTarget;
    let obj = {
        email: email.value,
        pasword: password.value,
        
    };
    if (email.value === "" || password.value === "") {
        alert(`Заповніть форму`)
    } else {
        console.log(obj);
        event.currentTarget.reset();
    }
});


