javascript:(function() {
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.zIndex = '9999';
  container.style.backgroundColor = '#262626';
  container.style.borderRadius = '8px';
  container.style.padding = '20px';
  container.style.opacity = '1';
  container.style.transition = 'opacity 0.5s ease';

  var title = document.createElement('h2');
  title.textContent = 'Blooket Factory Customizer';
  title.style.color = '#fff';
  title.style.margin = '0 0 10px';

  var inputContainer = document.createElement('div');
  inputContainer.style.display = 'flex';

  var newSrcInput = document.createElement('input');
  newSrcInput.type = 'text';
  newSrcInput.placeholder = 'Enter image link';
  newSrcInput.style.flex = '1';
  newSrcInput.style.padding = '8px';
  newSrcInput.style.border = 'none';
  newSrcInput.style.borderRadius = '8px';
  newSrcInput.style.fontFamily = window.getComputedStyle(title).getPropertyValue('font-family');

  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.style.marginLeft = '10px';
  submitButton.style.padding = '8px';
  submitButton.style.border = 'none';
  submitButton.style.borderRadius = '4px';
  submitButton.style.backgroundColor = '#404040';
  submitButton.style.color = '#fff';
  submitButton.style.cursor = 'pointer';
  submitButton.style.fontFamily = window.getComputedStyle(title).getPropertyValue('font-family');
  submitButton.style.transition = 'background-color 0.3s ease';

  submitButton.addEventListener('mouseover', function() {
    submitButton.style.backgroundColor = '#4caf50';
  });

  submitButton.addEventListener('mouseout', function() {
    submitButton.style.backgroundColor = '#404040';
  });

  inputContainer.appendChild(newSrcInput);
  inputContainer.appendChild(submitButton);
  container.appendChild(title);
  container.appendChild(inputContainer);
  document.body.appendChild(container);

  setTimeout(function() {
    var computedStyle = window.getComputedStyle(title);
    newSrcInput.style.fontFamily = computedStyle.fontFamily;
    submitButton.style.fontFamily = computedStyle.fontFamily;
  }, 0);

  var isDragging = false;
  var dragOffsetX = 0;
  var dragOffsetY = 0;

  container.addEventListener('mousedown', function(event) {
    isDragging = true;
    dragOffsetX = event.clientX - container.offsetLeft;
    dragOffsetY = event.clientY - container.offsetTop;
  });

  container.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var x = event.clientX - dragOffsetX;
      var y = event.clientY - dragOffsetY;
      container.style.left = x + 'px';
      container.style.top = y + 'px';
    }
  });

  container.addEventListener('mouseup', function() {
    isDragging = false;
  });

  submitButton.addEventListener('click', function() {
    var newSrc = newSrcInput.value.trim();

    if (newSrc !== '') {
      var elements = document.getElementsByClassName('styles__blook___1R6So-camelCase');
      for (var i = 0; i < elements.length; i++) {
        elements[i].src = newSrc;
      }
    }

    container.style.opacity = '0';

    setTimeout(function() {
      document.body.removeChild(container);
    }, 500); // Adjust the delay (in milliseconds) to match the transition duration in the CSS

  });
})();
