let nr = 0;


const item = {
    name: "Item",
    description: "Desc",
    price: 1,
    info: "Info",
    image: " "
  };

  for (let i = 1; i < 21; i++) {
    item.name = "Item"+i;
    item.price = Math.round((Math.random())*100);
    item.image = random_img();
    addCard();
  }

  function random_img(){
    let s = Math.floor((Math.random())*4);
    switch(s){
      case 0: return "images/ballon768x482.jpg";
      break;
      case 1: return "images/eggseaster600x400.jpg";
      break;
      case 2: return "images/money600x400.jpg";
      break;
      case 3: return "images/wallclock600x400.jpg";
      break;
    }
  }

  function addCard(){
    const pris = document.createElement("p");
    const info = document.createElement("p");
    const pic = document.createElement("img");
    const h = document.createElement("h4");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    pris.classList.add("card-text");
    info.classList.add("card-text");
    div1.classList.add("card-body");
    div2.classList.add("card");
    div2.classList.add("card-prop");
    div3.classList.add("col");
    let node = document.createTextNode(item.price);
    pris.appendChild(node);
    node = document.createTextNode(item.info);
    info.appendChild(node);
    pic.src = item.image;
    pic.style="width:100%";
    pic.alt="Card image";
    node = document.createTextNode(item.name);
    h.appendChild(node);
    div1.appendChild(h);
    div1.appendChild(pic);
    div1.appendChild(info);
    div1.appendChild(pris);
    div2.appendChild(div1);
    div3.appendChild(div2);
    let myId = "card"+nr.toString();
    div1.setAttribute('id', myId);
    div1.setAttribute('onclick', "javascript: itemClicked(this.id)");
    const element = document.getElementById("tabell");
    element.appendChild(div3);
    //alert(document.getElementById(myId).id);
    nr++;
  }

  function itemClicked(id){
    //alert("Mouse over: " + id);
    console.log("Id: " + id);
    let childs = document.getElementById(id).childNodes;
    childs.forEach((child, index) => {
        console.log("index: " + index + " " + child);
        console.log("index: " + index + " " + child.textContent);
    });
    let name = document.getElementById(id).childNodes[0].textContent;
    let imgSrc = document.getElementById(id).childNodes[1].src;
    let info = document.getElementById(id).childNodes[2]. textContent;
    let pris = document.getElementById(id).childNodes[3]. textContent;

    document.getElementById("prodspec-name").textContent = name;
    //document.getElementById("info-card").childNodes[3].textContent = name;
    document.getElementById("prodspec-info").textContent = info + "Lorem lkvn<vn<,v <v m vmd bd bmzx bmzcx cmn .zcxbzd.nbdbnznbzcxbnzcxnbzcxnbzcxbnzcxbnzcxbnzcxbn" + pris;
    //console.log(document.target.id);
    document.getElementById("prodspec-img").src = imgSrc;

    var myModal = new bootstrap.Modal(document.getElementById('myModal'), { 
      keyboard: false 
    }) 
    myModal.show() 
  }