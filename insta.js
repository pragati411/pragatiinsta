document.getElementById("send-comment").addEventListener("click", comment)
function comment(){
var xyz    = document.getElementById("post-comment")

var abc = document.getElementById("add-comment").value

xyz.innerText = abc;
document.getElementById("add-comment").value = "";
}

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

// post section //

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


// post image //


 var imgContainer;
 let a = document.getElementById("input_field");
  document.getElementById("shareBtn").addEventListener("click", function(){
     imgContainer=document.createElement('img');
    var url = URL.createObjectURL(a.files[0]);
    imgContainer.src = url;
    imgContainer.width='500';
    imgContainer.height='400';
  

 })





let postDescription1=`</div>


 <div class=" post-footer">
<div class="like-share-comment">
 <i class="far fa-heart" id="like"></i>
 
 <i class="far fa-comment" id="postcomment"></i>
 <i class="far fa-paper-plane"></i>

</div>`


let postfooter=    `<div class="save">
 <i class="far fa-bookmark" id="bookmark"></i>

</div>

</div>`
 let postcontent= `<div class="post-footer-content">
<p class="likes">100 Likes</p>
<p class="name">pragatishukla</p>
<p class="comments" id="">view all 20 comments</p>`

let postcontent1=   `<div class="add-comment">
<div class="left-comment">
    <i class="far fa-smile-beam"></i>`

    
 let postContent=    `<input type="text" id="add-comment" class="prag" placeholder="Add a Comment....">
    <div id="post-comment"></div> 


 </div>`

let postcontent2= `<div  class="right-comment"></div>

 <p id="send-comment">Post</p>
 `

 document.getElementById("shareBtn").addEventListener("click", function(){



    
let postElem = document.getElementById("instagram");

let abc = document.createElement("div");
let xyz=document.createElement('div');
xyz.style.fontSize = "22px"
xyz.style.marginLeft ="10px"

let a = document.createElement("div");
a.style.marginLeft = "460px"
a.style.fontSize = "22px"
a.style.top = "20px"

let  b= document.createElement("div");
b.style.padding= "10px 10px 10px 10px"
b.style.marginLeft= "10px"
b.style.fontSize= "20px"


let c= document.createElement("div");

c.style.width=
c.style.display= "flex";
c.style.fontSize= "20px"



let d = document.createElement("div");
d.style.width= "100%"
d.style.fontSize= "25px";

xyz.innerHTML=postDescription1
abc.innerHTML= postDescription
a.innerHTML= postfooter
b.innerHTML = postcontent
c.innerHTML = postcontent1
d.innerHTML = postContent

abc.append(imgContainer);
abc.append(xyz);
abc.append(a);
abc.append(b);
abc.append(c)
abc.append(d);


postElem.append(abc);



})
// let postElement = document.getElementById("instagram");
// let postArrays = [postDescription, imgContainer, postDescription1];

// let postHead =localStorage.getItem("key1");
// if (postHead !== null){


//    imgContainer.value = postHead;
// }
// function postSave() {
//    localStorage.setItem("key1", );



// }
 
//  const myObject  = [
//    {
//       URL: url,
//       like: "no",
//       comment: abc,

//    }
//  ]
//  localStorage.setItem(myObject);
//  const saveData = (item) => {
//    let existingData = JSON.parse(localStorage.getItem("myObject"));
 
//    if (existingData) {
//      existingData.push(item);
//    } else {
//      existingData = [item];
//    }
//  localStorage.setItem("myObject", JSON.stringify(existingData));
//  };
 
//  const getData = () => {
//    let existingData = JSON.parse(localStorage.getItem("myObject"));
   
//  };





   //btn//

 let instaId = document.getElementById("postId");
 let instaPost = document.getElementById("main-insta")
 let instaBox = document.getElementById("post-post").addEventListener("click",function(){
    instaId.style.display= "block";
    instaPost.style.display= "";

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


 // local satroage //

//  let likeContainer = document.getElementById("like");
 let commentContainer = document.getElementById("add-comment");
//  let saveContainer = document.getElementById("bookmark");

//  let like1 = localStorage.getItem("key1");
//  if (like1 !== null){
//     likeContainer.value = like1;

//  }
//  ;
 let comment1 = localStorage.getItem("comment-input");
 
 if (comment1 !== null){
   
   commentContainer.value =  comment1;
 }
//  let save1 = localStorage.getItem("key3")
//  if (save1 !== null){
//    saveContainer.value = save1
//  }
 


 
 function saveInput(e) {
    
   //  localStorage.setItem( e.target.name, e.target.value);
   //  localStorage.setItem( e.target.name, e.target.value);
    
    localStorage.setItem( e.target.name, e.target.value);
    
    
  }

 
 










 






    
  


      
 

  
  

  
  
  









 






    
  


      
 

  

