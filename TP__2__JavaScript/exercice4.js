let valuers = [0,"",0,"0",0,false,"",false,null,undefined,null,false,1 ,"1"," \t\n ", 0];
let var13 = NaN;
let var14 = NaN;
for(let i = 0 ; i<valuers.length ; i++){
     if(valuers[i]==valuers[i+1]){
           console.log(JSON.stringify(valuers[i]),"== ", JSON.stringify(valuers[i+1]),"--> true");
     }else{
         console.log(JSON.stringify(valuers[i]),"== ", JSON.stringify(valuers[i+1]),"--> false");
     }
     if(valuers[i]===valuers[i+1]){
           console.log(JSON.stringify(valuers[i]),"===", JSON.stringify(valuers[i+1]),"--> true");
     }else{
          console.log(JSON.stringify(valuers[i]),"===", JSON.stringify(valuers[i+1]),"--> false");
     }
    i++;
}
if(var13=var14){
      console.log(var13,"==",var14,"--> true");
}else{
    console.log( var13," ==",var14,"--> false");
}
if(var13===var14){
      console.log(var13, " === ",var14,"--> true");
}else{
    console.log(var13," === ",var14,"--> false");
}