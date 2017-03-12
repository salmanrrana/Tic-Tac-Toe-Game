

alert('sanity check');


$(function(){

    // this changes the color of the box green when the mouse hovers over
  $('.row').on('mouseover', function (){
    $(this).css('background-color', 'rgba(118,157,151,.7)').on('mouseout', function (){
      //this changes the color of the background back to white after mouse over
      $(this).css('background-color', 'rgba(255,255,255,.863)');
    });
  })

  // this changes the color of the box to pink when the box is clicked
  // $('.row').on('click', function (){
  //   $(this).css('background-color', 'rgba(236,178,237,.863)').on('mouseout', function (){
  //     $(this).css('background-color', 'rgba(236,178,237,.863)');
  //   });
  // })
})


//
$(function(){
//   this changes the color of the box to pink when the box is clicked
  $('.row').on('click', function (){
    $(this).css('background-color', 'rgba(236,178,237,.863)').on('mouseout', function (){
      $(this).css('background-color', 'rgba(236,178,237,.863)');
    });
  })
})

//
//
// if (x = 'div 1, div2, div3'){
//   alert('player 1 wins!');
// }
//
// x('div1, div2, div3');
