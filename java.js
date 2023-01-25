
function Bill()
{
    console.log("hii")
    const bill =parseInt(document.getElementById("bill").value);
    const tipp=Number(0)
    const tip=Number(bill*0.12);
    const tips=Number(bill*(18/100));
    const tipss=Number(bill*0.28);


    if(bill<=1000)
    {
        document.getElementById("gst").value=tipp;
        document.getElementById("total").value=(bill);
    }
    else if(bill>1000 && bill<=2499)
    {
        document.getElementById("gst").value=tip;
        document.getElementById("total").value=(bill+tip);
    }
    else if(bill >=2500 && bill <=7500)
    {
        document.getElementById("gst").value=tips;
        document.getElementById("total").value=(bill+tips);
  
    }
    else 
    {
        document.getElementById("gst").value=tipss;
        document.getElementById("total").value=(bill+tipss);
  
    }

    
}/*
 console.log(2=='2');
 console.log(2===2)*/
/*
function add(a,b)
{
    console.log(a+b);
    console.log(12+38);
  
    return "Shivakumar";
    
}
let r=add(45,55);
console.log(r);*/
/*
function a(year,dob)
{
    return year-dob; // Normal function
}
let A1=a(2022,1999)
console.log(A1)

const age =(cuurentYear,birtYear)=>{

    return cuurentYear-birtYear; //ARROW FUNCTION
}
let res=age(2022,2000);
console.log(res);


 const r=Bod=>2022-Bod ;

    let ag=r(2000);
    console.log(ag);*/
/*
let arr=['shiva',22,'EEE','Developer','true'];
console.log( typeof arr);
console.log(arr[2]);
console.log(arr.length);
console.log(arr.length-1);

let frnd=['Shiva','Kumar'];
console.log(frnd);
let res=frnd.push('Harish'); // length of array
console.log(frnd);
console.log(res);
let z=frnd.unshift('rajesh');// length of array
console.log(frnd);
console.log(z);
let r=frnd.pop(); // show the pop element
console.log(frnd);
console.log(r);
let g=frnd.shift();
console.log(frnd);
console.log(g); // show the shift element*/

let arr=[1,2,3,4,5,6,7,8,9,];
let arr1=arr;

console.log(arr);
console.log(arr1);

arr1.push('d');
console.log(arr1);
arr.unshift(100);
console.log(arr);
console.log(arr1);

