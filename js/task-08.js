const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit )

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value === "" || formElements.password.value === "") {
        return alert('Всі поля повинні бути заповнені')
    }

    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    }
    console.log(formData);
    event.currentTarget.reset();
}