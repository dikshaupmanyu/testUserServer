$(document).ready(function(){

  function sidebarSlimScroll(){
  // var _height = $('.app_sidebar_menu').innerHeight();
  _height = (($(window).height())-170)+'px'
  // $('.app_sidebar_menu').slimScroll({
  //   allowPageScroll: false,
  //   alwaysVisible: false,
  //   height: _height
  // });
}
  sidebarSlimScroll();

  //or switch-fieldas the selector
  var $radios = $('input.switch-field-radio').change(function () {
     // alert("hi");
      var value = $radios.filter(':checked').val();
      $('[data-switch-field]').hide();

      if(value==1)
      {
            $('[data-switch-field = 1]').show();
             $('[data-switch-field = 2]').show();
      }else{
      $('[data-switch-field = '+value+']').show();
    }
      if(value==0){
        $('[data-switch-field]').show();
      }


       $('.scroller-dash-left').scrollTop(0);
  });



  $('.recent_post_tips_arrow').on("click", function(e){
    $(this).toggleClass('fa-rotate-180');
    $("#recent_post_tips").slideToggle();
  });
  $('.new_post_tips_arrow').on("click", function(e){
    $(this).toggleClass('fa-rotate-180');
    $("#new_post_tips").slideToggle();
  });

});
// $( window ).resize(function() {
//   sidebarSlimScroll();
// });


// Header sticky js Start
$(window).scroll(function() {
    if ($(this).scrollTop() > 10){  
        $('.app_header').addClass("header_sticky");
    }
    else{
        $('.app_header').removeClass("header_sticky");
    }
});
// Header sticky js End 


// Dropdown Submenu js Start
$(document).ready(function(){
  $('.dropdown-submenu .dropdown-toggle').on("click", function(e){
    $(this).next('.dropdown-menu').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
// Dropdown Submenu js End


// Sidebar Toggle js Start
$(".side_toggle").click(function(){
  $(".body_wrapper").toggleClass("sidebar_close");
});
// Sidebar Toggle js Start
$(".sidebar-overlay").click(function(){
  $(".body_wrapper").removeClass("sidebar_close");
});
// Sidebar Toggle js End



// User img progress bar js Start
$(function() {
  $(".progress").each(function() {
    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');
    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })
  function percentageToDegrees(percentage) {
    return percentage / 100 * 360
  }
});
// User img progress bar js End


// Dropdown Select Js Start
$(".select_dropdown_menu li a").click(function(e){
    e.preventDefault()
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
// Dropdown Select Js End


// Welcome Modal Js Start
// $(window).on('load', function() {
//     $('#welcomeModal').modal('show');
// });
// Welcome Modal Js End


// Modal Backdrop Js Start
$('.modal').appendTo("body") 
// Modal Backdrop Js End


// // Copy Link Js Start
// function copyFunction() {
//   /* Get the text field */
//   var copyText = document.getElementById("copyInput");
//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */
//   /* Copy the text inside the text field */
//   document.execCommand("copy");
// } 
// // Copy Link Js End


// Avatar Upload Js Start
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#imagePreview').css('background-image', 'url('+e.target.result +')');
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});
// Avatar Upload Js End




// Image Upload Js Start
function ekUpload(){
  function Init() {
    console.log("Upload Initialised");
    var fileSelect    = document.getElementById('file-upload'),
        fileDrag      = document.getElementById('file-drag'),
        submitButton  = document.getElementById('submit-button');
    fileSelect.addEventListener('change', fileSelectHandler, false);
    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag.addEventListener('dragover', fileDragHover, false);
      fileDrag.addEventListener('dragleave', fileDragHover, false);
      fileDrag.addEventListener('drop', fileSelectHandler, false);
    }
  }
  function fileDragHover(e) {
    var fileDrag = document.getElementById('file-drag');
    e.stopPropagation();
    e.preventDefault();
    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
  }
  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;
    // Cancel event and hover styling
    fileDragHover(e);
    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }
  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages');
    m.innerHTML = msg;
  }
  function parseFile(file) {
    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;
    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start').classList.add("hidden");
      document.getElementById('response').classList.remove("hidden");
      document.getElementById('notimage').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image').classList.remove("hidden");
      document.getElementById('file-image').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image').classList.add("hidden");
      document.getElementById('notimage').classList.remove("hidden");
      document.getElementById('start').classList.remove("hidden");
      document.getElementById('response').classList.add("hidden");
      document.getElementById("file-upload-form").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }
  function uploadFile(file) {
    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar = document.getElementById('file-progress'),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = 'inline';
        xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
        xhr.upload.addEventListener('progress', updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            // Everything is good!

            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };
        // Start upload
        xhr.open('POST', document.getElementById('file-upload-form').action, true);
        xhr.setRequestHeader('X-File-Name', file.name);
        xhr.setRequestHeader('X-File-Size', file.size);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(file);
      } else {
        output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
      }
    }
  }
  // Check for the various File API support.
  // if (window.File && window.FileList && window.FileReader) {
  //   Init();
  // } else {
  //   document.getElementById('file-drag').style.display = 'none';
  // }
}
ekUpload();
// File Upload Js End