function calculateTax(income, expenses) {
        if(income<0 || expenses<0){
            return "Invalid Input";
        }
        else{
            let d=income-expenses;
            return d*0.20;
        }
}




function sendNotification(email) {
          let d=email.length,x=0;
          for(let i=0;i<d;i++){
            if(email[i]=='@'){
                x=i;
                break;
            }

          }

          if(x==0) return "Invalid Email";
          else{
             let s="",s2="";
            for(let i=0;i<d;i++){
                if(i<x) s+= email[i];
                else if(i>x) s2+=email[i];
            }

            return s+" sent you an email from "+s2;

          }
}







function checkDigitsInName(name) {
         if(typeof name!='string') return "Invalid Input";
         else{
            let check=false;
            for(let i=0;i<name.length;i++){
                if(name[i]>=0 && name[i]<=9)
                {
                  check=true;
                  break;
                }
            }
            if(check) return true;
            return false;
         }
}





function calculateFinalScore(obj) {
  if (typeof obj!== "object") {
    return "Invalid Input";
  }

  let farmerFather = 0;

  let totalScore;

  if (obj.isFFamily === true) {
    farmerFather = 20;
  }

  totalScore = obj.testScore + obj.schoolGrade + farmerFather;

  if (totalScore >= 80) 
    return true;

  return false;
}





function  waitingTime(waitingTimes  , serialNumber) {
        if( !Array.isArray(waitingTimes) || (typeof serialNumber !=='number'))
            return "Invalid Input";
        else{
            let sum=0,d=waitingTimes.length;
            for(let i=0;i<waitingTimes.length;i++){
                sum+=waitingTimes[i];
            }

            let avg=Math.round(sum/d);
            let x=serialNumber-d-1;

            return avg*(x);

        }
            
}






