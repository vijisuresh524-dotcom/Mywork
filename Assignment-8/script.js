const apiurl="https://69ff62842b7ab349602f9698.mockapi.io/Listitems";
const userForm=document.getElementById("userForm");
const dateid = document.getElementById("date");
const userinputid=document.getElementById("userid");
const contentid=document.getElementById("content");
const userlist=document.getElementById("userlist");

async function fetchUsers(){
    const res=await fetch(apiurl)
    const users=await res.json();
    console.log(users);

    userlist.innerHTML="";
users.forEach((u)=>{
    const li=document.createElement("li");
    li.className="list-group-item d-flex justify-content-center align-items-center"
    li.innerHTML=` <input 
            type="checkbox"
            onchange="taskCompleted(this)"
        >&nbsp;&nbsp;&nbsp;
    <span> ${u.date}.......${u.content}</span>&nbsp;&nbsp;&nbsp;
    <div>
        <button class="btn btn-sm btn-warning me-2" onclick="editUser('${u.id}')">Edit</button>
        </div>`
    userlist.appendChild(li)
})
}
fetchUsers();
function taskCompleted(checkbox){

    const taskText = checkbox.nextElementSibling;

    if(checkbox.checked){
       
    }
    else{
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
    }
}

userForm.addEventListener("submit", async(e)=>{
     e.preventDefault();//To avoid rendering
     const id=userinputid.value;
     const userdata={
        date:dateid.value,
        content:contentid.value,
     }
     console.log(id);
     
     if(id){
        //update
         await fetch(`${apiurl}/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userdata),
        })
     }else{
        
        
        await fetch(apiurl,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userdata),
        })
     }
     userForm.reset();

     fetchUsers();
})
 async function editUser(id){
    alert(id)
  const res=await fetch(`${apiurl}/${id}`)
   const user=await res.json();
   console.log(user);
   userinputid.value=user.id;
   dateid.value=user.date;
   contentid.value=user.content;    
}

