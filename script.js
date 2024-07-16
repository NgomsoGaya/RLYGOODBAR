function showCategory(category) {
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        cat.style.display = 'none';
    });
    document.getElementById(category).style.display = 'block';
}

function buyTicket() {
    alert("Ticket purchase functionality is not implemented yet.");
}

// Example for product impression (Menu item viewed)
gtag('event', 'view_item', {
    "items": [{
      "id": "meal123",
      "name": "Grilled Chicken",
      "category": "Meals",
      "price": 12.99
    }]
  });
  
  // Example for product click (Menu item clicked)
  gtag('event', 'select_content', {
    "items": [{
      "id": "meal123",
      "name": "Grilled Chicken",
      "category": "Meals",
      "price": 12.99
    }]
  });
  
  // Example for purchase (Ticket bought)
  gtag('event', 'purchase', {
    "transaction_id": "T12345",
    "value": 25.99,
    "currency": "USD",
    "items": [{
      "id": "ticket123",
      "name": "Jane Doe Concert Ticket",
      "category": "Events",
      "price": 25.99,
      "quantity": 1
    }]
  });
  