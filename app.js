"use strict";
let emploees=[];
let formEl=document.getElementById("formID");
let mainEl=document.getElementById("myMain");
//let divEl=document.getElementById("cardDiv");



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
    
    let card=document.createElement('div');
   // mainEl.appendChild(card);
    mainEl.appendChild(card);
    
    let img=document.createElement('img');
    img.src=this.imageURL;
    img.width="250";
    img.height="250";
    card.appendChild(img);

    let appendOne=document.createElement('h5');
    appendOne.textContent=`Name: ${this.fullName} - ID: ${this.emploeeID}`;
    card.appendChild(appendOne);

    let appendTwo=document.createElement('h5');
    appendTwo.textContent=`Department: ${this.department} - Level: ${this.level}`;
    card.appendChild(appendTwo);

    let sal=document.createElement('h5');
    sal.textContent=this.salary;
    card.appendChild(sal);
   
    
}

Employee.prototype.generateID= function(){
    let id=Math.floor(1000 + Math.random() * 9000);
    for(let i=0;i<=emploees.length-2;i++){
        if(emploees[i].emploeeID==id){
            id=Math.floor(1000 + Math.random() * 9000);
            i=0;
        }
    }
    this.emploeeID=id;
}

let ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior","Pictures/emp4.jpg",0);
let lana=new Employee(1001,"Lana Ali","Finance","Senior","Pictures/emp5.png",0); 
let tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior","Pictures/emp6.png",0);
let safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior","Pictures/emp1.jpg",0);
let omar=new Employee(1004,"Omar Zaid","Development","Senior","Pictures/emp2.jpg",0);
let rana=new Employee(1005,"Rana Saleh","Development","Junior","Pictures/emp7.png",0);
let hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","Pictures/emp3.jpg",0);


function renderAll() {
    for (let i = 0; i <= emploees.length-1; i++) {
        emploees[i].generateID();
        emploees[i].calculateSalary();
        emploees[i].render();
        //emploees[i].renderTable();
    }
}

//renderAll();

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
    newEmp.render();
    saveData(emploees);

}




function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("emps", stringfiyData);
}

//console.log("before saving to ls", allDrinks);

function getData() {
    let retrievedData = localStorage.getItem("emps");
    // console.log(retrievedData);
    // console.log(typeof retrievedData);
    let arrayData = JSON.parse(retrievedData);
    // each object doesn't has access to render method
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            // reinstantiation: re creating instance
            new Employee(arrayData[i].emploeeID, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].imageURL, arrayData[i].salary);
            if(i!=arrayData.length-1){emploees.pop();}
            // each obecjt has access to render method and all other Drink methods
        }
    }


    // console.log("after retrieving from ls", allDrinks);
    // console.log(typeof arrayData);
    renderAll();
}

getData();
