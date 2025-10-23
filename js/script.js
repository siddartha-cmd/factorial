function factorial(){
    let input = document.getElementById("input");
    let inp = parseInt(input.value);
    let out = 1;

    if(inp<=0){
        document.getElementById("output").innerHTML="Invalid number.";
        return;
    }


    for(let i=1; i<=inp; i++){
        out *= i;
    }
    document.getElementById("output").innerHTML=`${inp}! = ${out}`;
    return;
}