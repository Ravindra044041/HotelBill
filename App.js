let customerName = document.getElementById("custName"); 
let customerEmail = document.getElementById("custEmail");
let customerMob = document.getElementById("custPhone");
let customerAdd = document.getElementById("custAdd");

// order section
let samosa = document.getElementById("samosa");
let burger = document.getElementById("burger");
let halfChaumin = document.getElementById("halfChaumin");
let chaumin = document.getElementById("chaumin");

// bill section
let billName = document.getElementById("billName")
let billEmail = document.getElementById("billEmail")
let billPhone = document.getElementById("billPhone")
let billAdd = document.getElementById("billAdd")
let billDisplay = document.getElementById("billDisplay")
let totalAmount = document.getElementById("totalAmount")


customerName.onkeyup = () => {
  let Nameval = customerName.value;
  billName.innerHTML = Nameval;
}
customerEmail.onkeyup = () => {
  let Emailval = customerEmail.value;
  billEmail.innerHTML = Emailval;
}
customerMob.onkeyup = () => {
  let mobVal = customerMob.value;
  billPhone.innerHTML = mobVal;
}
customerAdd.onkeyup = () => {
  let address = customerAdd.value;
  billAdd.innerHTML = address;
}
let samosaShow = "";
let samosaRate = 10;
let samosaQuant = 0; 
samosa.onkeyup = () => {
  let samosaVal = samosa.value;
  samosaQuant = samosaVal;
  if(samosaVal == "" || samosaVal == 0){
    samosaShow = "";
    ShowBill();
  }else{
   samosaShow = `<tr>
   <th scope="row">1</th>
   <td>Samosa</td>
   <td>${samosaRate}</td>
   <td>${samosaQuant}</td>
   <td>${samosaRate} X ${samosaQuant} = ${samosaRate * samosaQuant}</td>
  </tr>`;
  ShowBill(); 
  }
}
let burgerShow = "";
let burgerRate = 20;
let burgerQuant = 0;
burger.onkeyup = () => {
  let burgerVal = burger.value;
  burgerQuant = burgerVal;
  if(burgerVal == "" || burgerVal == 0){
    burgerShow = "";
    ShowBill();
  }else{
    burgerShow = `<tr>
   <th scope="row">2</th>
   <td>Burger</td>
   <td>${burgerRate}</td>
   <td>${burgerQuant}</td>
   <td>${burgerRate} X ${burgerQuant} = ${burgerRate * burgerQuant}</td>
  </tr>`;
  ShowBill();
  }
}
let halfChauminShow = "";
let halfChauminRate = 20;
let halfChauminQuant = 0;
halfChaumin.onkeyup = () => {
  let halfChauminVal = halfChaumin.value;
  halfChauminQuant = halfChauminVal;
  if(halfChauminVal == "" || halfChauminVal == 0){
    halfChauminShow = "";
    ShowBill();
  }else{
    halfChauminShow = `<tr>
   <th scope="row">3</th>
   <td>Half Chaumin</td>
   <td>${halfChauminRate}</td>
   <td>${halfChauminQuant}</td>
   <td>${halfChauminRate} X ${halfChauminQuant} = ${halfChauminRate * halfChauminQuant}</td>
  </tr>`;
  ShowBill();
  }
}
  let chauminShow = "";
let chauminRate = 40;
let chauminQuant = 0;
chaumin.onkeyup = () => {
  let chauminVal = chaumin.value;
  chauminQuant = chauminVal;
  if(chauminVal == "" || chauminVal == 0){
    chauminShow = "";
    ShowBill();
  }else{
    chauminShow = `<tr>
   <th scope="row">4</th>
   <td>Chaumin</td>
   <td>${chauminRate}</td>
   <td>${chauminQuant}</td>
   <td>${chauminRate} X ${chauminQuant} = ${chauminRate * chauminQuant}</td>
  </tr>`;
  ShowBill();
  }
}

function ShowBill(){
  billDisplay.innerHTML = samosaShow + burgerShow + halfChauminShow + chauminShow;
  totalAmount.innerHTML = samosaRate * samosaQuant + burgerRate * burgerQuant + halfChauminRate * halfChauminQuant + chauminRate * chauminQuant;
}
