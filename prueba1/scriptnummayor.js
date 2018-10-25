//if (n1>n2 and n2>n3) = n1
//else (n2>n1 and n1>n3)=n2
//else (n3>n2 and)=

//if(n1>n2)
//if(n2>n3)

if(n1>n2){
   if(n1>n3){
       console.log(n1);
   }else{
       console.log(n3);
   }
}else if(n2>n1){
    if(n2>n3){
        console.log(n2);
    }else{
        console.log(n3);
    }
    else{
        console.log(n3);
    }