document.getElementById('submit-button').addEventListener("click",function(){
    const inputText=document.getElementById('input-text');
    const newComment= inputText.value;
    const commentSection= document.getElementById('comment-section');
    const authorName= document.getElementById('author-name').innerText;
    const p=document.createElement('p');
    const hr=document.createElement('hr');
    const h2= document.createElement('h2');
    h2.innerText='Author Name'
    p.innerText=newComment;
    commentSection.appendChild(hr);
    commentSection.appendChild(h2);
    commentSection.appendChild(p);
    inputText.value='';
    
})