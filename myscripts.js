let runningtotal=0;
let buffer="0";
let previousoperator=null;



const resbar=document.querySelector(".Result");
document.querySelector(".buttons").addEventListener('click',function(event){

    buttonclicked(event.target.innerText);
    

});

function buttonclicked(value){
    if(isNaN(parseInt(value))){
        symbolentered(value);
    }else{
        numberentered(value);
    }
    rerender();
}

function symbolentered(value){
switch(value){
    case "C":
        buffer="0";
        runningtotal=0;
        previousoperator=null;
        break;

    case "=":
        if(previousoperator===null){
            return;
        }           
            flushoperation(parseInt(buffer));
            previousoperator=null;
            buffer= " "+runningtotal;
            runningtotal=0;
            break;
        
        case "^":
            if(buffer.length===1){
                buffer="0";
            }
            else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;

            default:
               handlemath(value);
               break; 

}
}

function numberentered(value){
if(buffer==="0"){
    buffer=value;
}else{
    buffer+=value;
}
rerender();

}




function rerender(){
resbar.innerText=buffer;

}


function handlemath(value){
    const bufferint=parseInt(buffer)
    if(runningtotal===0){
    runningtotal=bufferint;
    }else{
    flushoperation(bufferint);
    }
previousoperator=value;

buffer="0";
}


function flushoperation(intbuffer){

    if(previousoperator==="+"){
        runningtotal+=intbuffer;
    }else if(previousoperator==="-"){
        runningtotal-=intbuffer;
    }else if(previousoperator==="x"){
        runningtotal*=intbuffer;
    }else if(previousoperator==="/"){
        runningtotal/=intbuffer;
    }
}

