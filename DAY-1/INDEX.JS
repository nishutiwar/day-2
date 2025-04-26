document.addEventListener('DOMContentLoaded', () => {
    const toggleInputs = document.querySelectorAll('.toggle input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const extensionCards = document.querySelectorAll('.extension-card');
  
    // Toggle Active/Inactive Class
    toggleInputs.forEach(input => {
      input.addEventListener('change', () => {
        const card = input.closest('.extension-card');
        card.classList.toggle('active', input.checked);
        card.classList.toggle('inactive', !input.checked);
      });
    });
  
    // Filter Buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        // Update active filter button styling
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        extensionCards.forEach(card => {
          const isActive = card.classList.contains('active');
          if (filter === 'all') {
            card.style.display = 'flex';
          } else if (filter === 'active' && isActive) {
            card.style.display = 'flex';
          } else if (filter === 'inactive' && !isActive) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });