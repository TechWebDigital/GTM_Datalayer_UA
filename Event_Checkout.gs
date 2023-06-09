//IMPLEMENTARE EVENT CHECKOUT
//Event Checkout care sa impinga informatii despre produsele care ajung in checkout. Mandatory sunt name, id, price si quantity.

<script>
/**
 * A function to handle a click on a checkout button. This function uses the eventCallback
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
 */
function onCheckout() {
  dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'},
        'products': [{
          'name': 'Triblend Android T-Shirt',
          'id': '12345',
          'price': 15.25,
          'brand': 'Google',
          'category': 'Apparel',
          'variant': 'Gray',
          'quantity': 1
       }]
     }
   },
   'eventCallback': function() {
      document.location = 'checkout.html';
   }
  });
}
</script>
