alert('sanity check');

//sets the counter number to 1 in order to track future clicks
var counter = 1

$(document).ready(function() {
  //when a row is clicked, add the pattern. looks at function below called patternForCurrentPlayer and
  // within the patternForCurrentPlayer it also tracks clicks
  $('.row').on('click', patternForCurrentPlayer);
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
      $('.messages').html("Cheater! Cheater! Pumpkin Eater!").fadeOut(4000);
      // alert("Cheater! Cheater! Pumpkin Eater!");
    } else if ($(this).hasClass('marked2')) {
      // $('.messages').html("This is already clicked dummy!").fadeOut(4000);
      alert("This is already clicked dummy!");
    } else {
      $(this).addClass('marked1').append('<h3>X</h3>')
      //now it adds the click counter if it does add the class
      clickCounter();
      lookForWinner();
      addPoint();
    }
  }
  //if it is divisible by 2 then put player2
  else {
    if ($(this).hasClass('marked1')) {
      // $('.messages').html("Cheater! Cheater! Pumpkin Eater!").fadeOut(4000);
      alert("Cheater! Cheater! Pumpkin Eater!");
    } else if ($(this).hasClass('marked2')) {
      // $('.messages').html("This is already clicked dummy!").fadeOut(4000);
      alert("this is already clicked dummy!");
    } else {
      $(this).addClass('marked2').append('<h3>O</h3>');
      //now it adds the click counter if it does add the class
      clickCounter();
      //it will also look for a winner after each turn
      lookForWinner();
      addPoint();
    }

  }
}


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


//Looks for different winning possibilities
function lookForWinner() {
  // player 1 accross wins
  if ($('.row1').hasClass('marked1') && $('.row2').hasClass('marked1') && $('.row3').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert('Player 1 kicked butt');
  } else if ($('.row4').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row6').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);alert("Player 1 is master of all");
  } else if ($('.row7').hasClass('marked1') && $('.row8').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Player 1 will succeed in life");
    // player 1 diagonal wins
  } else if ($('.row1').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Player 2 must now buy lunch for Player 1 for the rest of the year");
  } else if ($('.row3').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row7').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Ding Dang Player 1...You Rule!!!");
    //player 1 down wins
  } else if ($('.row1').hasClass('marked1') && $('.row4').hasClass('marked1') && $('.row7').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Player 1 will have nothing but luck in life");
  } else if ($('.row2').hasClass('marked1') && $('.row5').hasClass('marked1') && $('.row8').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Go buy Player 1 a new pair of socks, Player 2");
  } else if ($('.row3').hasClass('marked1') && $('.row6').hasClass('marked1') && $('.row9').hasClass('marked1')) {
    var score1= $('.scorebox1').html();
    score1++
    $('.scorebox1').html(score1);
    alert("Hey! Good Job Player 1. Im gonna start calling you Jeff");
  }
  // player 2 across wins
  else if ($('.row1').hasClass('marked2') && $('.row2').hasClass('marked2') && $('.row3').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert('Player 2 kicked butt');
  } else if ($('.row4').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row6').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Player 2 is master of all");
  } else if ($('.row7').hasClass('marked2') && $('.row8').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Player 1 must now buy lunch for Player 2 for the rest of the year");
    // diagonal wins
  } else if ($('.row1').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Hey! Good Job Player 1. Im gonna start calling you Julia");
  } else if ($('.row3').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row7').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Ding Dang Player 2...You Rule!!!");
    //down wins
  } else if ($('.row1').hasClass('marked2') && $('.row4').hasClass('marked2') && $('.row7').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Go buy Player 2 a new pair of socks, Player 1. Now!!");
  } else if ($('.row2').hasClass('marked2') && $('.row5').hasClass('marked2') && $('.row8').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("player 2 wins");
  } else if ($('.row3').hasClass('marked2') && $('.row6').hasClass('marked2') && $('.row9').hasClass('marked2')) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert("Player 2 will have nothing but luck in life");
  } else if (counter >= 10) {
    var score2= $('.scorebox2').html();
    score2++
    $('.scorebox2').html(score2);
    alert('We need a winner. PLAY AGAIN!');
  }
};
