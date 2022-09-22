document.getElementById("send-comment").addEventListener("click", fire)
function fire(){
var xyz    = document.getElementById("post-comment")

var abc = document.getElementById("add-comment").value
// console.log(abc);
xyz.innerText = abc;
document.getElementById("add-comment").value = "";
}
document.getElementById("comment").addEventListener("click", abc)
function abc(){
    document.getElementById("send-comment").style.display = "block";
}