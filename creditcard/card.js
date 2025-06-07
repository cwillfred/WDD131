function isCardNumberValid(number) {
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
  
    displayError('');
    const number = this.cardNumber.value;
    const month = parseInt(this.expMonth.value);
    const year = parseInt('20' + this.expYear.value);
  
    let errorMsg = '';
  
    if (isNaN(number)) {
      errorMsg += 'Card number is not a valid number.\n';
    } else if (!isCardNumberValid(number)) {
      errorMsg += 'Card number is not valid.\n';
    }
  
    const today = new Date();
    const expDate = new Date(year, month - 1);
    if (expDate < today) {
      errorMsg += 'Card expiration date must be in the future.\n';
    }
  
    if (errorMsg !== '') {
      displayError(errorMsg);
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  document.querySelector('#credit-card').addEventListener('submit', submitHandler);
  