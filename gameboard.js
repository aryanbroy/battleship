document.addEventListener('DOMContentLoaded', function () {
      // Get the grid container element
      const gridContainer = document.getElementById('gridContainer');

      // Create a 10x10 grid
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');
          gridContainer.appendChild(gridItem);
        }
      }
});