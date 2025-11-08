
let choices = document.querySelectorAll('.choice');
// console.log(choices);


let resultt = document.getElementById('result');

let player = document.getElementById('playerko');
let computer = document.getElementById('computerko');
let playerWin = 0;
let computerWin = 0;





for( let i=0; i<choices.length; i++)
{
   choices[i].addEventListener('click', function(){

    let userChoice = choices[i].id;
    let computerSelectedValue = getComputerChoices();

    console.log(`${userChoice} ~ ${computerSelectedValue}`);

    if (userChoice == computerSelectedValue) 
    {
        console.log("Its a Draw !!");
        resultt.innerHTML='Its a Draw !!'


    }


    else if ( (userChoice==="rock"   && computerSelectedValue==="scissor")   ||
              (userChoice==="paper"  && computerSelectedValue==="rock")     ||
              (userChoice==="scissor" && computerSelectedValue==="paper")  
            )

    {
        console.log("You Win !!");
        resultt.innerHTML='You Win, congratss !!'

        playerWin++;
        player.innerHTML = `${playerWin}`;
    }


    else 
    {
        console.log("You loose, LOL !!");
        resultt.innerHTML='You loose, LOL !!'

        computerWin++;
        computer.innerHTML = `${computerWin}`;
    }





   });
}





function getComputerChoices()
{
    let getComputerChoices = ['rock', 'paper', 'scissor'];
    let selectedIndex = parseInt( Math.random() *3 );
    return getComputerChoices[selectedIndex];
}






document.querySelector('#reset')
        .addEventListener('click', function()
        {
            window.location.reload(true);
        });