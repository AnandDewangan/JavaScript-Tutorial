$(document).ready(function() {
    $('.bsHide').click(function() {
        $('#BasicJS').hide(1200);
    })
    $('.bsShow').click(function(){
        $('#BasicJS').show(1200);
    })
    $('.domHide').click(function() {
        $('#DOM').hide(1200);
    })
    $('.domShow').click(function(){
        $('#DOM').show(1200);
    })
    $('.objHide').click(()=>{
        $('#object').hide(1200);
    })
    $('.objShow').click(()=>{
        $('#object').show(1200);
    })
    $('.oopsHide').click(()=>{
        $('#Oops').hide(1200);
    })
    $('.oopsShow').click(()=>{
        $('#Oops').show(1200);
    })
})

const darkMode = document.getElementById('dark_mode');
darkMode.onclick=()=>{
    document.body.classList.toggle('dark-mode');
    if(darkMode.innerText==='Night'){
        darkMode.innerText='Day';
    }
    else{
        darkMode.innerText='Night';
    }
}