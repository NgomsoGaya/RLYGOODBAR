function showCategory(category) {
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        cat.style.display = 'none';
    });
    document.getElementById(category).style.display = 'block';
}

document.querySelector('.buy-ticket').addEventListener('click', function() {
    gtag('event', 'begin_checkout', {
      'event_category': 'Ticket Purchase',
      'event_label': 'Jane Doe Concert'
    });
  });
  
  // Assuming the actual purchase is tracked server-side or through a checkout flow
  function buyTicket() {
    gtag('event', 'purchase', {
      'transaction_id': 'T12345',
      'value': 25.99,
      'currency': 'USD',
      'items': [{
        'id': 'ticket123',
        'name': 'Jane Doe Concert Ticket',
        'category': 'Events',
        'price': 25.99,
        'quantity': 1
      }]
    });
    alert("Ticket purchase functionality is not implemented yet.");
  }
  

document.querySelector('#meals-button').addEventListener('click', function() {
    gtag('event', 'view_menu', {
      'event_category': 'Menu',
      'event_label': 'Meals'
    });
  });
  
  document.querySelector('#drinks-button').addEventListener('click', function() {
    gtag('event', 'view_menu', {
      'event_category': 'Menu',
      'event_label': 'Drinks'
    });
  });

  document.querySelector('#book-table form').addEventListener('submit', function() {
    gtag('event', 'book_table', {
      'event_category': 'Table Booking',
      'event_label': 'Book a Table'
    });
  });

  

  