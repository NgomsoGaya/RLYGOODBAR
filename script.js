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