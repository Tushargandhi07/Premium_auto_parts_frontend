let button= document.querySelector("form");
let cancel= document.querySelector("#cancel");

button.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("yes")
   swal("Payment Done","","success").then((res)=>{
    window.location.href="index.html"
   })
})
cancel.addEventListener("click",()=>{
    window.location.href="index.html"
});let placeorder=document.getElementById("placeorder")
  
placeorder.addEventListener("click",(e)=>{
    e.preventDefault()
let fname=document.getElementById("fname").value
let email=document.getElementById("email").value
let adr=document.getElementById("adr").value
let city=document.getElementById("city").value
// let cod=document.getElementById("cod")

// console.log(cod)
if(fname=="" || email==""|| adr==""|| city=="" ){
 swal("Please fill all the details", "", "warning")
}else{
    let obj={
        fname,email,adr,city
    }
   
    swal("Order Placed", "", "success").then(()=>{
        window.location.href="index.html"
    })
   
}
})