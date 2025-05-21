function calculatePrice() {
  const ticketQuantity = document.getElementById('ticketQuantity').value;
  const pricePerTicket = 150;
  const totalPrice = ticketQuantity * pricePerTicket;
  
  if (ticketQuantity > 0) {
    document.getElementById('priceDisplay').innerHTML = Цена: ${totalPrice}₽;
  } else {
    document.getElementById('priceDisplay').innerHTML = '';
  }
}

function processPayment() {
  const ticketQuantity = document.getElementById('ticketQuantity').value;
  
  if (ticketQuantity > 0) {
    alert(`Вы выбрали ${ticketQuantity} билетов. Переход к оплате...`);
    // Здесь будет код для реализации перехода к оплате
  } else {
    alert('Пожалуйста, выберите количество билетов.');
  }
}