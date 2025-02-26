let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                console.log(num);
                reject("promise rejected");
                
            }
            
            h1.style.color=color;
            console.log(num);
            console.log(`color changed to ${color}`);
            resolve("done");

            },delay);
    });
}
async function demo(){
    try{
     await changeColor("yellow",1000);
    await changeColor("green",1000);
    await changeColor("pink",1000);}
    catch(err){
        console.log(`error caught${err} yeaahhh`)
    }
    
    
}