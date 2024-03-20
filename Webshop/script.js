const item = {
    name: "Item 1",
    description: "Desc",
    price: 50,
    info: "Info",
    image: ""
  };

  function addCard(){
    const pris = document.createElement("p");
    const info = document.createElement("p");
    const h = document.createElement("h4");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    pris.classList.add("card-text");
    info.classList.add("card-text");
    div1.classList.add("card-body");
    div2.classList.add("card");
    div3.classList.add("col");
    let node = document.createTextNode(item.price);
    pris.appendChild(node);
    node = document.createTextNode(item.info);
    info.appendChild(node);
    node = document.createTextNode(item.name);
    h.appendChild(node);
    div1.appendChild(h);
    div1.appendChild(pris);
    div1.appendChild(info);
    div2.appendChild(div1);
    div3.appendChild(div2);

    const element = document.getElementById("tabell");
    element.appendChild(div3);

  }

  function createImage(){
    const myImage = new Image(100, 200);
    myImage.src = "picture.jpg";
    document.body.appendChild(myImage);
  }