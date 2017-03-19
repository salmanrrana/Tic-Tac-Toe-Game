

alert('sanity check');

// var player = 1;
// var gameboard = $('#gameboard');
// var turn =
//
//
// function patternForCurrentPlayer(player) {
//   if(player == 1) {
//     return '.marked1';
//   } else {
//     return '.marked2';
//   }
// }

$(function(){
  $('.row').on('click', (function(){
    if($(this).hasClass('marked1')){
      alert("Cheater! Cheater! Pumpkin Eater!");
    } else if ($(this).hasClass('marked2')){
      alert("this is already clicked dummy!");
    } else {
      $(this).addClass('marked1').append('<h3>X</h3>');
    }


}))
})




$(function(){
  var x = false;
  setInterval(function() {
      $("h1").css("color", x ? "#DC9FFA" : "#FA9FD9");
      x = !x;
  }, 400);
})


$(function(){
  $('button').on('click', (function (){
    $('.row').removeClass('marked1').empty().removeClass('marked2').empty()
  }))
})

// $(function(){
//   // var Winner = function findWinner(){
//   // player 1 accross wins
//   if($('.row1' && '.row2' && '.row3').hasClass('marked1')){
//   alert("player 1 wins");
//   } else if($('.row4' && '.row5' && '.row6').hasClass('marked1')){
//   alert("player 1 wins");
//   } else if($('.row7' && '.row8' && '.row9').hasClass('marked1')){
//   alert("player 1 wins");
//   // player 1 diagonal wins
//   } else if($('.row1' && '.row5' && '.row9').hasClass('marked1')){
//   alert("player 1 wins");
//   } else if($('.row3' && '.row5' && '.row7').hasClass('marked1')){
//   alert("player 1 wins");
//   //player 1 down wins
//   } else if($('.row1' && '.row4' && '.row7').hasClass('marked1')){
//   alert("player 1 wins");
//   } else if($('.row2' && '.row5' && '.row8').hasClass('marked1')){
//   alert("player 1 wins");
//   } else if($('.row3' && '.row6' && '.row9').hasClass('marked1')){
//   alert("player 1 wins");
//   }
//   // player 2 across wins
//    else if($('.row1' && '.row2' && '.row3').hasClass('marked2')){
//   alert("player 2 wins");
//   } else if($('.row4' && '.row5' && '.row6').hasClass('marked2')){
//   alert("player 2 wins");
//   } else if($('.row7' && '.row8' && '.row9').hasClass('marked2')){
//   alert("player 2 wins");
//   // diagonal wins
//   } else if($('.row1' && '.row5' && '.row9').hasClass('marked2')){
//   alert("player 2 wins");
//   } else if($('.row3' && '.row5' && '.row7').hasClass('marked2')){
//   alert("player 2 wins");
//   //down wins
//   } else if($('.row1' && '.row4' && '.row7').hasClass('marked2')){
//   alert("player 2 wins");
//   } else if($('.row2' && '.row5' && '.row8').hasClass('marked2')){
//   alert("player 2 wins");
//   } else if($('.row3' && '.row6' && '.row9').hasClass('marked2')){
//   alert("player 2 wins");
//   } else {
//    alert("CAT");
//   }
// // }
// });
// //
// // // reset button
// // removeClass marked1 and marked2
