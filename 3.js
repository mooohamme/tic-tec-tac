let title = document.querySelector('.title');
let turn = 'X';
let squares = [];
function winnner()
{
    for(let i = 1; i<10;i++)
    {
       squares[i] = document.getElementById('item' + i).innerHTML;
    }
     if(squares[1] == squares[2] && squares[2]== squares[3] && squares[1] != '')
    {
        title.innerHTML = 'إلي بعدو'
     document.getElementById('item'+1).style.background = '#000';
     document.getElementById('item'+2).style.background = '#000';
     document.getElementById('item'+3).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }
    else if(squares[4] == squares[5] && squares[5]== squares[6] && squares[5] != '')
    {
        title.innerHTML = 'صلي على رسول الله '
     document.getElementById('item'+4).style.background = '#000';
     document.getElementById('item'+5).style.background = '#000';
     document.getElementById('item'+6).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }
    else if(squares[7] == squares[8] && squares[8]== squares[9] && squares[8] != '')
    {
        title.innerHTML = 'ممتاز'
     document.getElementById('item'+7).style.background = '#000';
     document.getElementById('item'+8).style.background = '#000';
     document.getElementById('item'+9).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }




    else if(squares[1] == squares[4] && squares[4]== squares[7] && squares[1] != '')
    {
        title.innerHTML = 'صل على رسول الله '
     document.getElementById('item'+1).style.background = '#000';
     document.getElementById('item'+4).style.background = '#000';
     document.getElementById('item'+7).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }
    else if(squares[2] == squares[5] && squares[5]== squares[8] && squares[5] != '')
    {
        title.innerHTML = 'يارمه'
     document.getElementById('item'+2).style.background = '#000';
     document.getElementById('item'+5).style.background = '#000';
     document.getElementById('item'+8).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }
    else if(squares[3] == squares[6] && squares[6]== squares[9] && squares[6] != '')
    {
        title.innerHTML = 'صل على رسول الله '
     document.getElementById('item'+3).style.background = '#000';
     document.getElementById('item'+6).style.background = '#000';
     document.getElementById('item'+9).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }



    else if(squares[1] == squares[5] && squares[5]== squares[9] && squares[5] != '')
    {
        title.innerHTML = 'الله وأكبر'
     document.getElementById('item'+1).style.background = '#000';
     document.getElementById('item'+5).style.background = '#000';
     document.getElementById('item'+9).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }
    else if(squares[3] == squares[5] && squares[5]== squares[7] && squares[5] != '')
    {
        title.innerHTML = 'محمد عمك'
     document.getElementById('item'+3).style.background = '#000';
     document.getElementById('item'+5).style.background = '#000';
     document.getElementById('item'+7).style.background = '#000';
     setInterval(function(){title.innerHTML += '.'},1000);
     setTimeout(function(){location.reload()},4000);
    }

}






function game (id)
{
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == '')
    {
          element.innerHTML= 'X';
          turn = 'O';
         title.innerHTML = 'O';
    }
     else if(turn === 'O' && element.innerHTML == '')
     {
        element.innerHTML= 'O';
        turn = 'X';
        title.innerHTML = 'X';

     }
     winnner()

}