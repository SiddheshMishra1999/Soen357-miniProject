var modal = document.getElementById('myModal');
   var img = document.getElementById('myImg');
   var modalImg = document.getElementById('modal-image');


   /*img.onclick = function() {
   modal.style.display = "block";
   modalImg.src = this.getAttribute("data-highres");
   }*/

   var span = document.getElementsByClassName("close")[0];

   span.onclick = function() {
   modal.style.display = "none";
   }

   window.onclick = function() {
   if(event.target == modal) {
        modal.style.display = "none";
      }
   }

   window.openModal = function(img) {
    modal.style.display = "block";
    modalImg.src = img.getAttribute("myImg");
  }

var images = document.querySelectorAll('modalImg');
for (var i = 0;  i < images.length; i++) {
    images[i].addEventListener('click', openModal)
}