"use strict";



function Employee(emploeeID,fullName,department,level,imageURL,salary){
    this.emploeeID=emploeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
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
    document.write(`<h2>Employee name is: ${this.fullName} and his/her salary is: ${this.salary}</h2>`);
    console.log(`<h2>Employee name is: ${this.fullName} and his/her salary is: ${this.salary}</h2>`);
}

let ghazi=new Employee(1000,"Ghazi Samer","Administration","senior","test",0);
let lana=new Employee(1001,"Lana Ali","Finance","senior","test",0); 
let tamara=new Employee(1002,"Tamara Ayoub","Marketing","senior","test",0);
let safi=new Employee(1003,"Safi Walid","Administration","mid-senior","test",0);
let omar=new Employee(1004,"Omar Zaid","Development","senior","test",0);
let rana=new Employee(1005,"Rana Saleh","Development","junior","test",0);
let hadi=new Employee(1006,"Hadi Ahmad","Finance","mid-senior","test",0);

ghazi.calculateSalary();
lana.calculateSalary();
tamara.calculateSalary();
safi.calculateSalary();
omar.calculateSalary();
rana.calculateSalary();
hadi.calculateSalary();

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();
