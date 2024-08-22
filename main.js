if(!localStorage.getItem('user-details')){
    localStorage.setItem('user-details',JSON.stringify([]))
}
let details=JSON.parse(localStorage.getItem("user-details"))
function register(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
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
    let c=false
 let d=JSON.parse(localStorage.getItem("user-details"))
    for(let n of d){
        if(n.name==name && n.email==email &&n.password==password){
            c=true}
            
        }
        if(c==true){
            alert("you are already registered")
            window.location="login.html"
        }
        else{
            let object={};
            object.name=name
            object.email=email
            object.password=password
        
            details.push(object)
            localStorage.setItem('user-details',JSON.stringify(details))
            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("pass").value=""
            alert("registered successfully")
            window.location="login.html"
            
        }
        
    }




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

function logout(){
    localStorage.removeItem('logged')
    window.location='login.html'
}





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







if(!localStorage.getItem('resume_list')){
    localStorage.setItem('resume_list',JSON.stringify([]))
}

 let str_list= JSON.parse(localStorage.getItem("resume_list"))
function myfunction(){
    
    str_list.push(resume)
    localStorage.setItem("resume_list",JSON.stringify(str_list))
    window.location="resumelist.html"
}







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


function searchparm(){
    const searchParams = new URLSearchParams(window.location.search); 
    const indexParam = searchParams.get('index'); 
     
    const ls_data = JSON.parse(localStorage.getItem('resume_list'))
    document.getElementById('id_name').innerHTML=ls_data[indexParam].name

}


                                                                                                                                                                                                                                                                                                                                                                                                                                                                         