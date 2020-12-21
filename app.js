let result = 0;
let div = document.getElementById("number");
function add60(){
    result += 60;
    div.innerHTML = result;
    if (result < 60000) setTimeout(add60, 60000);
    else return 0
}
add60();