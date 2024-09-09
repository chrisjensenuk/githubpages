const txtDinners = document.getElementById("txtDinners").value;
const dinners = txtDinners.split('\n');

const btn = document.getElementById("btnGo");
btn.addEventListener('click', function(event) {
    go();
})

const divResult = document.getElementById("divResult");

const usedDinners = [];

function go(){
    
    if(dinners.length == usedDinners.length){
        usedDinners.length = 0;
    }

    while(true){
        var rndIndex = Math.floor(Math.random() * dinners.length);

        var dinner = dinners[rndIndex];
    
        if(dinnerNotBeenUsed(dinner)){
            break;
        }
    }

    usedDinners.push(dinner);
    divResult.innerHTML = dinner;
}

function dinnerNotBeenUsed(dinner)
{
    for(const usedDinner of usedDinners)
    {
        if(usedDinner == dinner)
        {
            return false;
        }
    }

    return true;
}