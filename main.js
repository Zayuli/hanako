function muestra_oculta(id) {
   console.log("hola " +id);
   var check = document.getElementById(id);
   console.log("check" +check);
   if (check.style.display == "none"){
    check.style.display ="block";
}
else {
    check.style.display ="none";
}
}