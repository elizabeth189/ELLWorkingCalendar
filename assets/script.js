
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MM/DD/YYYY, h:mm a'));
});

//function of saveBtn to save to localstorage
//not saving description, will need to fix this
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  //console.log(this); ?
//   var userInput = '#saveBtn'.children('textarea');
//   renderLastSaved();
//   function renderLastSaved() {
//   userInput.text(localStorage.getItem('userInput'));
//   }
//   saveBtn.on('click', function () {
//     var userInput = document.querySelector('.description').value;
//     userInput.textContent = userInput;
//     localStorage.setItem("description",userInput);
//     renderLastSaved();
//   });
});

$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-1 .description').val(localStorage.getItem("hour-1"));
$('#hour-2 .description').val(localStorage.getItem("hour-2"));
$('#hour-3 .description').val(localStorage.getItem("hour-3"));
$('#hour-4 .description').val(localStorage.getItem("hour-4"));
$('#hour-5 .description').val(localStorage.getItem("hour-5"));

//get current number of hours to use to compare 
function ppfTrack() {
  var currentHour = dayjs().hour();

  // create to loop through class time-block for PPF class
  $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]); //split h:mm
      console.log( blockHour, currentHour)

      //changing classes based on hour
      if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })
}
ppfTrack(); 

