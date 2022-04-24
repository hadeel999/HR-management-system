"use strict";
let tableEl=document.getElementById("tableID");
let tableFooterEl=document.getElementById("tableFooter");

let admNo=0,marNo=0,finNo=0,devNo=0;
let admAvg=0,marAvg=0,finAvg=0,devAvg=0;
let admSum=0,marSum=0,finSum=0,devSum=0;
let emploees=[];
function renderTable() {

    for(let i=0;i<=emploees.length-1;i++){
        if(emploees[i].department.toLocaleLowerCase()==="administration"){
            admNo++;
            admSum+=emploees[i].salary;
        }
        if(emploees[i].department.toLocaleLowerCase()==="marketing"){
            marNo++;
            marSum+=emploees[i].salary;
        }
        if(emploees[i].department.toLocaleLowerCase()==="finance"){
            finNo++;
            finSum+=emploees[i].salary;
        }
        if(emploees[i].department.toLocaleLowerCase()==="development"){
            devNo++;
            devSum+=emploees[i].salary;
        }
    }

    let tr1 = document.createElement("tr");
    tableEl.appendChild(tr1);

    let admName = document.createElement("td");
    admName.textContent = "Administration";
    tr1.appendChild(admName);

    let employeesNoAdm = document.createElement("td");
    employeesNoAdm.textContent = admNo;
    tr1.appendChild(employeesNoAdm);

    let avgSalaryAdm = document.createElement("td");
    avgSalaryAdm.textContent = admSum/admNo;
    tr1.appendChild(avgSalaryAdm);
    
    let totalSalaryAdm = document.createElement("td");
    totalSalaryAdm.textContent = admSum;
    tr1.appendChild(totalSalaryAdm);

    

    let tr2 = document.createElement("tr");
    tableEl.appendChild(tr2);

    let marName = document.createElement("td");
    marName.textContent = "Marketing";
    tr2.appendChild(marName);

    let employeesNoMar = document.createElement("td");
    employeesNoMar.textContent = marNo;
    tr2.appendChild(employeesNoMar);

    let avgSalaryMar = document.createElement("td");
    avgSalaryMar.textContent = marSum/marNo;
    tr2.appendChild(avgSalaryMar);
    
    let totalSalaryMar = document.createElement("td");
    totalSalaryMar.textContent = marSum;
    tr2.appendChild(totalSalaryMar);


    
    let tr3 = document.createElement("tr");
    tableEl.appendChild(tr3);

    let finName = document.createElement("td");
    finName.textContent = "Finance";
    tr3.appendChild(finName);

    let employeesNoFin = document.createElement("td");
    employeesNoFin.textContent = finNo;
    tr3.appendChild(employeesNoFin);

    let avgSalaryFin = document.createElement("td");
    avgSalaryFin.textContent = finSum/finNo;
    tr3.appendChild(avgSalaryFin);
    
    let totalSalaryFin = document.createElement("td");
    totalSalaryFin.textContent = finSum;
    tr3.appendChild(totalSalaryFin);



    let tr4 = document.createElement("tr");
    tableEl.appendChild(tr4);

    let devName = document.createElement("td");
    devName.textContent = "Development";
    tr4.appendChild(devName);

    let employeesNoDev = document.createElement("td");
    employeesNoDev.textContent = devNo;
    tr4.appendChild(employeesNoDev);

    let avgSalaryDev = document.createElement("td");
    avgSalaryDev.textContent = devSum/devNo;
    tr4.appendChild(avgSalaryDev);
    
    let totalSalaryDev = document.createElement("td");
    totalSalaryDev.textContent = devSum;
    tr4.appendChild(totalSalaryDev);



    let sum=admSum+marSum+finSum+devSum;
    let total=admNo+marNo+finNo+devNo;

    let tfr = document.createElement("tr");
    tableFooterEl.appendChild(tfr);

    let totalNo = document.createElement("td");
    totalNo.textContent = total;
    tfr.appendChild(totalNo);

    let finalAvg = document.createElement("td");
    finalAvg.textContent =sum/total ;
    tfr.appendChild(finalAvg);

    let finalSum = document.createElement("td");
    finalSum.textContent = sum;
    tfr.appendChild(finalSum);
}


function getData() {
    let retrievedData = localStorage.getItem("emps");
    // console.log(retrievedData);
    // console.log(typeof retrievedData);
    emploees = JSON.parse(retrievedData);
    // each object doesn't has access to render method
   
    }

    

getData();

renderTable();