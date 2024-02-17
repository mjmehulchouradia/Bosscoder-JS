const likeimages=document.querySelectorAll('.like-image');

let isClicked=true;

likeimages.forEach((likeImage)=>
{ 
const likeDialoge=likeImage.previousElementSibling;
likeImage.addEventListener('mouseover',() =>{
    likeDialoge.style.display='block';
})

likeImage.addEventListener('click',() =>{
    if(isClicked){
    likeImage.src="like.png";
    isClicked=false;
    }
    else
    {
    likeImage.src="unlike-img.png";
    isClicked=true;
    }
})


likeImage.addEventListener('mouseout',() =>{
likeDialoge.style.display='none';
})
});
