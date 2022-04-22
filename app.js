"use strict";
let emploees=[];
let formEl=document.getElementById("formID");
let mainEl=document.getElementById("myMain");


function Employee(emploeeID,fullName,department,level,imageURL,salary){
    this.emploeeID=emploeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
    emploees.push(this);
}

Employee.prototype.calculateSalary= function(){
    let tempSalary;
    (this.level.toLocaleLowerCase()==="senior")?tempSalary=Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500:
    (this.level.toLocaleLowerCase()==="mid-senior")?tempSalary=Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000:
    (this.level.toLocaleLowerCase()==="junior")?tempSalary=Math.floor(Math.random() * (1000 - 500 + 1) ) + 500:
    console.log("Employee's level is not correct!!");
    this.salary=tempSalary*0.925;
}



Employee.prototype.render= function(){
  //  document.write(`<h2>Employee name is: ${this.fullName} and his/her salary is: ${this.salary}</h2>`);
    let img=document.createElement('img');
    img.src=this.imageURL;
    img.width="250";
    img.height="250";
    mainEl.appendChild(img);

    let list=document.createElement('ul');
    mainEl.appendChild(list);

    let appendOne=document.createElement('p');
    appendOne.textContent=`Name: ${this.fullName} - ID: ${this.emploeeID}`;
    list.appendChild(appendOne);

    let appendTwo=document.createElement('p');
    appendTwo.textContent=`Department: ${this.department} - Level: ${this.level}`;
    list.appendChild(appendTwo);

    let sal=document.createElement('p');
    sal.textContent=this.salary;
    list.appendChild(sal);

}

Employee.prototype.generateID= function(){
    let id=Math.floor(1000 + Math.random() * 9000);
    for(let i=0;i<=emploees.length-2;i++){
        if(emploees[i].emploeeID==id){
            id=Math.floor(1000 + Math.random() * 9000);
            i=0
        }
    }
    this.emploeeID=id;
}

formEl.addEventListener("submit",handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let fName=event.target.fullName.value;
    let dep=event.target.department.value;
    let lev=event.target.level.value;
    let img=event.target.image.value;
    let newEmp=new Employee(0,fName,dep,lev,img,0);
    newEmp.generateID();
    newEmp.calculateSalary();
}


let ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior","Pictures/emp4.jpg",0);
let lana=new Employee(1001,"Lana Ali","Finance","Senior","Pictures/emp5.png",0); 
let tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior","Pictures/emp6.png",0);
let safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior","Pictures/emp1.jpg",0);
let omar=new Employee(1004,"Omar Zaid","Development","Senior","Pictures/emp2.jpg",0);
let rana=new Employee(1005,"Rana Saleh","Development","Junior","Pictures/emp7.png",0);
let hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","Pictures/emp3.jpg",0);

for(let i=0;i<=emploees.length-1;i++){
    emploees[i].generateID();
    emploees[i].calculateSalary();
    emploees[i].render();
}

