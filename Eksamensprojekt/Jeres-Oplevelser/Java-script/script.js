function handleClick(element) {

    // Dette fjerner "active" fra alle clickede elementer

    var elements = document.querySelectorAll('.img-container');
    elements.forEach(function(el) {
      el.classList.remove('active');
    });
  
    // Her tilføjer jeg "active" til det clickede element

    element.classList.add('active');
  }

