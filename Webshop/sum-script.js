window.onload = function () {
    const orderInfo = JSON.parse(localStorage.getItem("person"));
    const productTitle = localStorage.getItem("prodTitle");

    document.getElementById('namn').innerText = orderInfo.firstname + " " + orderInfo.surname;
    document.getElementById('email').innerText = orderInfo.email;
    document.getElementById('telefon').innerText = orderInfo.phonenumber;
    document.getElementById('adress').innerText = orderInfo.streetaddress;
    document.getElementById('produkt').innerText = productTitle;
}
