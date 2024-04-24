const inputfeild=document.querySelector("#inputtext")
const outputfeild=document.querySelector("#out")

inputfeild.addEventListener('input',function(){
    console.log(inputfeild.value);
    let pass=inputfeild.value;
    if(pass.length<8){
        outputfeild.innerText='password is to short';
        outputfeild.style.color='red';
    }
    else{
        if(pass.search(/[a-z]/)==-1){
            outputfeild.innerText='password is missing is lower case letter';
            outputfeild.style.color='red';

        }
        else if(pass.search(/[A-Z]/)==-1){
            outputfeild.innerText='password is missing is upper case letter';
            outputfeild.style.color='red';

        }

        else if(pass.search(/[0-9]/)==-1){
            outputfeild.innerText='password is missing a number';
            outputfeild.style.color='red';

        }
        else{
            outputfeild.innerText='password is strong';
            outputfeild.style.color='green';

        }
    }


});