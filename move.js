document.addEventListener('DOMContentLoaded', function () {
    var homeLink = document.getElementById('homeLink');
    homeLink.addEventListener('click', function (event) {
      location.reload();
    });
  });