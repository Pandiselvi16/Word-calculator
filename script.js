
function calci(){
    let content = document.getElementById("textbox1").value
    let string = content.split(' ');
    let length = string.length;
    let result = document.getElementById("result");
    result.innerHTML = length + " words";
}