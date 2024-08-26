
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCiNMBuzO8wRBQ3LSYnRU72lfW9Q9q95t0",
    authDomain: "resume-builder-4e98e.firebaseapp.com",
    projectId: "resume-builder-4e98e",
    storageBucket: "resume-builder-4e98e.appspot.com",
    messagingSenderId: "715390569378",
    appId: "1:715390569378:web:6d4c24eebb1788536a80fb"
  };
  const app = initializeApp(firebaseConfig);

  const db=getFirestore(app)

async function register_new(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value


await addDoc(collection(db,"register"),{
    email:email,
    name:name,
    password:password
})
}
window.register_new=register_new









// if(!localStorage.getItem('user-details')){
//     localStorage.setItem('user-details',JSON.stringify([]))
// }
// let details=JSON.parse(localStorage.getItem("user-details"))
// function register(){
//     let name=document.getElementById("name").value
//     let email=document.getElementById("email").value
//     let password=document.getElementById("pass").value
    // let object={};
    // object.name=name
    // object.email=email
    // object.password=password

    // details.push(object)
    // localStorage.setItem('user-details',JSON.stringify(details))
    // document.getElementById("name").value=""
    // document.getElementById("email").value=""
    // document.getElementById("pass").value=""
    // window.location="login.html"
//     let c=false
//  let d=JSON.parse(localStorage.getItem("user-details"))
//     for(let n of d){
//         if(n.name==name && n.email==email &&n.password==password){
//             c=true}
            
//         }
//         if(c==true){
//             alert("you are already registered")
//             window.location="login.html"
//         }
//         else{
//             let object={};
//             object.name=name
//             object.email=email
//             object.password=password
        
//             details.push(object)
//             localStorage.setItem('user-details',JSON.stringify(details))
//             document.getElementById("name").value=""
//             document.getElementById("email").value=""
//             document.getElementById("pass").value=""
//             alert("registered successfully")
//             window.location="login.html"
            
//         }
        
//     }




function login(){
    let email1=document.getElementById('email').value
    let pass1=document.getElementById('pass').value
    let a=false
    let b=JSON.parse(localStorage.getItem("user-details"))
    for(let n of b){
        if(n.email==email1 && n.password==pass1){
            a=true
        }
    }
    if(a==true){
        localStorage.setItem("logged","true")
        alert("successfully logged in")
        window.location="resume.html"
    }
    else{
        alert("wrong")
    }
    localStorage.setItem('email',email1)
    document.getElementById('email').value=""
    document.getElementById('pass').value=""

}
window.login=login

function logout(){
    localStorage.removeItem('logged')
    window.location='login.html'
}
window.logout=logout




let variable=localStorage.getItem("email")
let resume = {
    personal_details: {
        language: []
    },
    skills: [],
    educations: [],
    projects: [],
    work_experience: []
}
resume.adminid=variable




function test(e, key, p_key) {
    if (p_key){
        resume[p_key][key] = e.value
    }
    else {
        resume[key] = e.value
    }
}
window.test=test


function addList(id, key, p_key) {
    let each = document.getElementById(id).value
    if (p_key) {
        resume[p_key][key].push(each)
    }
    else {
        resume[key].push(each)
    }
    document.getElementById(id).value = "";
    addskill(key,p_key)
}
window.addList=addList



function addskill(keyname,p_keyname){
    let add="";
    if(p_keyname){
        for(let each in resume[p_keyname][keyname]){
            if(resume[p_keyname][keyname][each]!="")
            add=add+`<p>${resume[p_keyname][keyname][each]}</p>
                         <button onclick="adddelete(${each},'${keyname}','${p_keyname}')">delete</button>`
        }
        document.getElementById("langvalue").innerHTML=add

    }
    else{
        for(let each in resume[keyname]){
            if(resume[keyname][each]!="")
            add=add+`<p>${resume[keyname][each]}</p>
            <button onclick="adddelete(${each},'${keyname}')">delete</button>`
        }
        document.getElementById("skillvalue").innerHTML=add
    }
}
function adddelete(index,keyname,p_keyname){
let listskill=[];
if(p_keyname){
    for(let n in resume[p_keyname][keyname]){
        if(n!=index){
            listskill.push(resume[p_keyname][keyname][n])
            console.log(resume)
        }
    }
    resume[p_keyname][keyname]=listskill;
}else{
    for(let n in resume[keyname]){
       if(n!=index){
        listskill.push(resume[keyname][n])
       }
    }
    resume[keyname]=listskill
}
addskill(keyname,p_keyname)
}
window.adddelete=adddelete





function edu(key,id, firstparam, secondparam, thirdparam, fourthparam, fifthparam) {
    let firstvalue = document.getElementById(firstparam);
    let secondvalue = document.getElementById(secondparam);
    let thirdvalue = document.getElementById(thirdparam);
    let fourthvalue = document.getElementById(fourthparam);
    let fifthvalue = document.getElementById(fifthparam);
    let object = {}

    if (fifthparam) {
        object[firstparam] = firstvalue.value
        object[secondparam] = secondvalue.value
        object[thirdparam] = thirdvalue.value
        object[fourthparam] = fourthvalue.value
        object[fifthparam] = fifthvalue.value
        fourthvalue.value = " "
        fifthvalue.value = " "
    }
    else if (thirdparam) {
        object[firstparam] = firstvalue.value
        object[secondparam] = secondvalue.value
        object[thirdparam] = thirdvalue.value
    }
    resume[key].push(object)
    console.log(object)
    firstvalue.value = " "
    secondvalue.value = " "
    thirdvalue.value = " "

    view(key,id,firstparam,secondparam,thirdparam,fourthparam,fifthparam)

}
window.edu=edu




function view(keyvalue,idname,firstof,secondof,thirdof,fourthof,fifthof) {
    let userList = "";
    if(fifthof){
        for(let each in resume[keyvalue]){
            userList = userList + `<tr>
                            <td> ${resume[keyvalue][each][firstof]} </td>
                            <td> ${resume[keyvalue][each][secondof]} </td>
                            <td> ${resume[keyvalue][each][thirdof]} </td>
                            <td> ${resume[keyvalue][each][fourthof]} </td>
                            <td> ${resume[keyvalue][each][fifthof]} </td>
                            <td> <button onclick="deLete('${each}','${idname}','${keyvalue}','${firstof}','${secondof}','${thirdof}','${fourthof}','${fifthof}')">Delete</button> </td>
                            </tr>`
    
        }
    }
    else if(thirdof){
        for(let each in resume[keyvalue]){
            userList = userList + `<tr>
                            <td> ${resume[keyvalue][each][firstof]} </td>
                            <td> ${resume[keyvalue][each][secondof]} </td>
                            <td> ${resume[keyvalue][each][thirdof]} </td>
                            <td> <button onclick="deLete('${each}','${idname}','${keyvalue}','${firstof}','${secondof}','${thirdof}')">Delete</button> </td>
                             </tr>`
    
        }
    }
    document.getElementById(idname).innerHTML = userList 
}


function deLete(index,idname,key,first,second,third,fourth,fifth){
    let new_list = [];
    for(let e in resume[key]){
        if(e != index){
            new_list.push(resume[key][e])
        }
        }
    resume[key]=new_list
    view(key,idname,first,second,third,fourth,fifth)
}
window.deLete=deLete






// if(!localStorage.getItem('resume_list')){
//     localStorage.setItem('resume_list',JSON.stringify([]))
// }

//  let str_list= JSON.parse(localStorage.getItem("resume_list"))
async function myfunction(){
    await addDoc(collection(db,"user_resume"),{
      resume
    })
}
window.myfunction=myfunction


 variable=localStorage.getItem("email")
let b=JSON.parse(localStorage.getItem("resume_list"))
 function display(){
    let user_list="";
    for(let each in b){
        if(b[each].adminid==variable){
            user_list=user_list+`<tr>
        <td>${b[each].name}</td>
        <td>${b[each].email}</td>
        <td>${b[each].phoneno}</td>
        <td><button onclick="delete_fun(${each})">Delete</button></td>
         <td><a href="resumepage.html?index=${each}"<button>viewpage</button></a></td>
         </tr>`
        }
        }
        document.getElementById('list').innerHTML=user_list
 }

 
 function delete_fun(index){
     let new_value=[];
     for(let e in b){
        if(e!=index){
            new_value.push(b[e])
        }
     }
     b=new_value
     localStorage.setItem("resume_list",JSON.stringify(new_value))
     display()
 }
window.delete_fun=delete_fun

function searchparm(){
    const searchParams = new URLSearchParams(window.location.search); 
    const indexParam = searchParams.get('index'); 
     
    const ls_data = JSON.parse(localStorage.getItem('resume_list'))
    document.getElementById('id_name').innerHTML=ls_data[indexParam].name

}
window. searchparm= searchparm
function page(){
    const searchParams = new URLSearchParams(window.location.search); 
    const indexParam = searchParams.get('index'); 
     
    const ls_data = JSON.parse(localStorage.getItem('resume_list'))
    document.getElementById('id1_name').innerHTML=ls_data[indexParam].name
    document.getElementById('id2_name').innerHTML=ls_data[indexParam].email
    document.getElementById('id3_name').innerHTML=ls_data[indexParam].phoneno
    document.getElementById('id4_name').innerHTML=ls_data[indexParam].address
    document.getElementById('id5_name').innerHTML=ls_data[indexParam].objective

    document.getElementById('id7_name').innerHTML=ls_data[indexParam].personal_details.language
    document.getElementById('id11_name').innerHTML=ls_data[indexParam].personal_details.dateofbirth
    document.getElementById('id12_name').innerHTML=ls_data[indexParam].personal_details.gender
    document.getElementById('id13_name').innerHTML=ls_data[indexParam].personal_details.fathername
    document.getElementById('id14_name').innerHTML=ls_data[indexParam].personal_details.mothername
    document.getElementById('id15_name').innerHTML=ls_data[indexParam].personal_details.maritalstatus
    document.getElementById('id16_name').innerHTML=ls_data[indexParam].personal_details.nationality






    let a=""
    for(let n of ls_data[indexParam].skills){
        a=a+`<li>${n}</li>`
    }
    document.getElementById('add').innerHTML=a


    
        let b=""
        for(let each in ls_data[indexParam].educations){
            b=b+`<tr>
                <td>${ls_data[indexParam].educations[each].education}</td>
                <td>${ls_data[indexParam].educations[each].institute}</td>
                <td>${ls_data[indexParam].educations[each].place}</td>
                <td>${ls_data[indexParam].educations[each].percentage}</td>
                <td>${ls_data[indexParam].educations[each].passingyear}</td>
                </tr>`
        }
    
    document.getElementById('edu').innerHTML=b



   
    let c=""
        for(let each in ls_data[indexParam].work_experience){
            c=c+`<tr>
                <td>${ls_data[indexParam].work_experience[each].company}</td>
                <td>${ls_data[indexParam].work_experience[each].year}</td>
                <td>${ls_data[indexParam].work_experience[each].details}</td>
                </tr>`
        }
    
    document.getElementById('work').innerHTML=c

    
    let d=""
        for(let each in ls_data[indexParam].projects){
            d=d+`<tr>
                <td>${ls_data[indexParam].projects[each].projectname}</td>
                <td>${ls_data[indexParam].projects[each].platform}</td>
                <td>${ls_data[indexParam].projects[each].discription}</td>
                </tr>`
        }
    
    document.getElementById('pro').innerHTML=d
}
window.page=page
                                                                                                                                                                                                                                                                                                                                                                                                                                                                         