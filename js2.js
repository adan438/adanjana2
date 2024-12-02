'use strict'
// Adan Asaad, Jana khlaily
// פונקציה לבדוק אם מספר הוא ראשוני ןקטן מ237
for(let i=2; i<237; i++){
  let j=true;
  if(i==2)
    j=false;
  else 
      for(let k=2; k<i; k++)
          if(i%k==0)
            j=false;


  // הדפסת כל המספרים הראשוניים הקטנים מ-237
    if(j)
      console.log(i);       
}