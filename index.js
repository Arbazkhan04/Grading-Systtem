const totalmarks=()=>{
   
  let eng=document.getElementById("eng").value;
  let math=document.getElementById("math").value;
  let urdu=document.getElementById("urdu").value;
  let phy=document.getElementById("phy").value;
  // new code 
  if(eng>100){
    // document.getElementById('eng').innerHTML=`please enter correct marks`
    // console.log('enter corrext marks')
    alert('Your english marks is not correct')
 
  }
 
  if(urdu>100){
    // document.getElementById('urdu').innerHTML=`please enter correct marks`
    alert('Your urdu marks is not correct')
 
  }
 
  
  if(math>100){
    alert('Your math marks is not correct') 
  }
 
  if(phy>100){
    alert('Your phy marks is not correct') 
  }
  
  const sum=parseFloat(eng)+parseFloat(math)+parseFloat(phy)+parseFloat(urdu);
     console.log(sum);
     document.getElementById("total").innerHTML=`Your English marks is ${eng} <br>
     Your math marks is ${math}<br>Your urdu marks is ${urdu}<br>Your Physics marks is ${phy}<br>  And your total marks is ${sum}`
}  
  // old code
//    let marks=eng=math=urdu=phy;
//   if(marks<=100){
//    const sum=parseFloat(eng)+parseFloat(math)+parseFloat(phy)+parseFloat(urdu);
//    console.log(sum);
//    document.getElementById("total").innerHTML=`Your English marks is ${eng} <br>
//    Your math marks is ${math}<br>Your urdu marks is ${urdu}<br>Your Physics marks is ${phy}<br>  And your total marks is ${sum}`
//   }else{
//      alert("please enter your correcr marks");
//   }
 
// }
const totalAverage=()=>{
  let eng=document.getElementById("eng").value;
  let math=document.getElementById("math").value;
  let urdu=document.getElementById("urdu").value;
  let phy=document.getElementById("phy").value;
  if(eng>100){
    // document.getElementById('eng').innerHTML=`please enter correct marks`
    // console.log('enter corrext marks')
    alert('Your english marks is not correct')
 
  }
 
  if(urdu>100){
    // document.getElementById('urdu').innerHTML=`please enter correct marks`
    alert('Your urdu marks is not correct')
 
  }
 
  
  if(math>100){
    alert('Your math marks is not correct') 
  }
 
  if(phy>100){
    alert('Your phy marks is not correct') 
  }
  
 
  // let marks=eng=math=urdu=phy;
  // if(marks<=100){
    const sum=parseFloat(eng)+parseFloat(math)+parseFloat(phy)+parseFloat(urdu);

     let av=(sum/400)*100;
     document.getElementById('average').innerHTML=`Your Average is ${av}`
     
  // }
  // else{
  //   alert("please enter your correcr marks");
  // }
    
}
const totalgrade=()=>{
  let eng=document.getElementById("eng").value;
  let math=document.getElementById("math").value;
  let urdu=document.getElementById("urdu").value;
  let phy=document.getElementById("phy").value;
  if(eng>100){
    // document.getElementById('eng').innerHTML=`please enter correct marks`
    // console.log('enter corrext marks')
    alert('Your english marks is not correct')
 
  }
 
  if(urdu>100){
    // document.getElementById('urdu').innerHTML=`please enter correct marks`
    alert('Your urdu marks is not correct')
 
  }
 
  
  if(math>100){
    alert('Your math marks is not correct') 
  }
 
  if(phy>100){
    alert('Your phy marks is not correct') 
  }
  // let marks=eng=math=urdu=phy;
  
  // if(marks<=100){
    const sum=parseFloat(eng)+parseFloat(math)+parseFloat(phy)+parseFloat(urdu);
    if(sum<=400 && sum>=300){
      document.getElementById("grade").innerHTML=`Your grade is A`;
      console.log("A");
    }
    else if (sum<=299 && sum>=200) {
      console.log("B");
      document.getElementById("grade").innerHTML=`Your grade is B`;

    } 
    else if(sum<=199 && sum>=150){
      console.log("c");
      document.getElementById("grade").innerHTML=`Your grade is C`;

    }
    else{
      // alert("fail");
      document.getElementById("grade").innerHTML=`Your are fail`;
    }
    
      
    
  // }
  // else{
  //   alert("please enter your correcr marks");
  // }
    
}