document.getElementById("send-comment").addEventListener("click", fire)
function fire(){
var xyz    = document.getElementById("post-comment")

var abc = document.getElementById("add-comment").value
// console.log(abc);
xyz.innerText = abc;
document.getElementById("add-comment").value = "";
}
// function abc(){
    // document.getElementById("insta-comment").style.display = "block";
// }
document.getElementById("like").addEventListener("click", likeimage)
function likeimage() {
    

    document.getElementById("like").style.background= "red";
    document.getElementById("like").style.fontSize= "40px";
    }

    document.getElementById("bookmark").addEventListener("click", save)
    function save(){
        document.getElementById("bookmark").style.background= "black";
        document.getElementById("bookmark").style.fontSize= "40px";
    }
    
document.getElementById("postcomment").addEventListener("click", commentonpost)
function commentonpost(){
   

    console.log("hii");

  let comment =  document.getElementById("add-comment");
  comment.className = "show";

}


 let instaContainer = document.getElementById("stroy-instagram");
 let Container = document.getElementById("main-insta");
 
 let instaImage = document.getElementById("instaimage1").addEventListener("click",function(){
  instaContainer.style.display= "block";
  Container.style.display= "none";


 }

 );
 let closeBtn = document.getElementById("btn").addEventListener("click", function(){
    console.log("hii")
    instaContainer.style.display= "none";
    Container.style.display= "block";

 }) 



 let postDescription = `<div class="posts">
 <div class="post-title">
     <div class="post-left">
          <div class="image">
              <img src="2.jpg" alt="ff" width="32" height="32" id = "container">

         </div>
          <div class="details">
              <p class="name">pragatishukla411</p>
              <p class="location">satna</p>
          </div>
      </div>
     <div class="post-right">
         <i class="fas fa-ellipsis-h"></i>

     </div>

 </div>
 <div class="post-content" id='img_place'></div>`
 var imgContainer;
 let a = document.getElementById("input_field");
  document.getElementById("shareBtn").addEventListener("click", function(){
     imgContainer=document.createElement('img');
    var url = URL.createObjectURL(a.files[0]);
    imgContainer.src = url;
    imgContainer.width='500';
    imgContainer.height='400';
  

 })




//    let imgContainer = document.createElement("img");
//    imgContainer.id= "imgBox"
//    imgContainer.width= "500";
//    imgContainer.height= "400";
//    imgContainer.alt= "pragati";
//    imgContainer.src=  "#";
//    console.log("95",imgContainer);

let postDescription1=`</div>


 <div class=" post-footer">
<div class="like-share-comment">
 <i class="far fa-heart" id="like"></i>
 
 <i class="far fa-comment" id="postcomment"></i>
 <i class="far fa-paper-plane"></i>

</div>
<div class="save">
 <i class="far fa-bookmark" id="bookmark"></i>

</div>

</div>
<div class="post-footer-content">
<p class="likes">100 Likes</p>
<p class="name">pragatishukla</p>
<p class="comments" id="">view all 20 comments</p>
<div class="add-comment">
<div class="left-comment">
    <i class="far fa-smile-beam"></i>
    <input type="text" id="add-comment" class="prag" placeholder="Add a Comment....">
    <div id="post-comment"></div> 


 </div>
 <div  class="right-comment"></div>
 <p id="send-comment">Post</p>
 `

 document.getElementById("shareBtn").addEventListener("click", function(){



    
let postElem = document.getElementById("pragati");

let abc = document.createElement("div");
let xyz=document.createElement('div');
xyz.innerHTML=postDescription1
abc.innerHTML= postDescription

abc.append(imgContainer);
abc.append(xyz);


postElem.append(abc);



})
 let instaId = document.getElementById("postId");
 let instaPost = document.getElementById("main-insta")
 let instaBox = document.getElementById("post-post").addEventListener("click",function(){
    instaId.style.display= "block";
    instaPost.style.display= "none";

 })
 let instaBTn = document.getElementById("fileBtn").addEventListener("click",function(){
    instaId.style.display= "none";
    instaPost.style.display= "block";

 })
 let insta2 = document.getElementById("postId")
 let insta3 = document.getElementById("main-insta")
 let insta1 = document.getElementById("shareBtn").addEventListener("click", function(){
    insta2.style.display= "none";
    insta3.style.display= "block";
 })


 // local satroage //


 
  
  

  
  
  









 






    
  


      
 

  

