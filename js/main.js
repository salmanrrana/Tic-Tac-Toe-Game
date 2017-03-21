alert('sanity check');

//sets the counter number to 1 in order to track future clicks
var counter = 1


$(document).ready(function() {
  //when a row is clicked, add the pattern. looks at function below called patternForCurrentPlayer and
  // within the patternForCurrentPlayer it also tracks clicks
  $('.row').on('click', patternForCurrentPlayer);
  //looks for a Winner

})

//when a click happens track clicks. looks at function below called clickCounter
function clickCounter() {
  //add 1 after the click. counter starts at 1
  counter++;
  // and then when clicks are not divisible by 2 make it state player 1 in span
  if (counter % 2 !== 0) {
    $('span').text('Player 1 Turn');
    // when it is divisible by 2 make it state player 2 in span
  } else {
    $('span').text('Player 2 Turn');
  }
}

//sets the patterns for the players
function patternForCurrentPlayer() {
  //if counter is not divisilbe by 2 then add player 1
  if (counter % 2 !== 0) {
    if ($(this).hasClass('marked1')) {
      alert("Cheater! Cheater! Pumpkin Eater!");
    } else if ($(this).hasClass('marked2')) {
      alert("this is already clicked dummy!");
    } else {
      $(this).addClass('marked1').append('<h3>X</h3>')
      //now it adds the click counter if it does add the class
      clickCounter();
      lookForWinner();
    }
  }
  //if it is divisible by 2 then put player2
  else {
    if ($(this).hasClass('marked1')) {
      alert("Cheater! Cheater! Pumpkin Eater!");
    } else if ($(this).hasClass('marked2')) {
      alert("this is already clicked dummy!");
    } else {
      $(this).addClass('marked2').append('<h3>O</h3>');
      //now it adds the click counter if it does add the class
      clickCounter();
      lookForWinner();
    }

  }
}

// function noWinner() {
//   if (counter === 10){
//   alert('WE NEED A WINNER. PLAY AGAIN!');
// }
// }

// if (counter >= 9 && active == true){
//   var active = false;
//   alert('We need a winner. PLAY AGAIN!');
// }

// this is for the flashing title
$(function() {
  var x = false;
  setInterval(function() {
    $("h1").css("color", x ? "#DC9FFA" : "#FA9FD9");
    x = !x;
  }, 400);
});


// this is the reset button functionality
$(function() {
  $('button').on('click', (function() {
    $('.row').removeClass('marked1').empty().removeClass('marked2').empty();
    counter = 1;
    $('span').empty().append('Player 1 Turn');
  }));
});



function lookForWinner() {
  // player 1 accross wins
  if ($('.row1').hasClass('marked1') && $('.row2').hasClass('marked1') && $('.row3').hasClass('marked1')) {
    alert('player 1 wins');
    debugger;
  } else if ($('.row4').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row6').hasClass('marked1')) {
    alert("player 1 wins");
  } else if ($('.row7').hasClass('marked1') && $('.row8').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    alert("player 1 wins");
    // player 1 diagonal wins
  } else if ($('.row1').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    alert("player 1 wins");
  } else if ($('.row3').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row7').hasClass('marked1')) {
    alert("player 1 wins");
    //player 1 down wins
  } else if ($('.row1').hasClass('marked1') && $('.row4').hasClass('marked1') && $('.row7').hasClass('marked1')) {
    alert("player 1 wins");
  } else if ($('.row2').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row8').hasClass('marked1')) {
    alert("player 1 wins");
  } else if ($('.row3').hasClass('marked1') && $('.row6').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    alert("player 1 wins");
  }
  // player 2 across wins
  else if ($('.row1').hasClass('marked2') && $('.row2').hasClass('marked2') && $('.row3').hasClass('marked2')) {
    alert("player 2 wins");
  } else if ($('.row4').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row6').hasClass('marked2')) {
    alert("player 2 wins");
  } else if ($('.row7').hasClass('marked2') && $('.row8').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    alert("player 2 wins");
    // diagonal wins
  } else if ($('.row1').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    alert("player 2 wins");
  } else if ($('.row3').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row7').hasClass('marked2')) {
    alert("player 2 wins");
    //down wins
  } else if ($('.row1').hasClass('marked2') && $('.row4').hasClass('marked2') && $('.row7').hasClass('marked2')) {
    alert("player 2 wins");
  } else if ($('.row2').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row8').hasClass('marked2')) {
    alert("player 2 wins");
  } else if ($('.row3').hasClass('marked2') && $('.row6').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    alert("player 2 wins");
  } else if (counter >= 10 ){
    alert('We need a winner. PLAY AGAIN!');
  }
};
