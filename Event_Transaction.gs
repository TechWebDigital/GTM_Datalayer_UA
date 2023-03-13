//IMPLEMENTARE EVENT TRANSACTION
//Event Transaction care sa impinga informatii despre valoarea totala a produselor cumparate cat si informatii efectiv despre produsele achizitionate.

<script>
// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'event': Transaction,
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'Online Store',
        'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
        'tax':'4.90',
        'shipping': '5.99',
        'coupon': 'SUMMER_SALE'
      },
      'products': [{                            // List of productFieldObjects.
        'name': 'Triblend Android T-Shirt',     // Name or ID is required.
        'id': '12345',
        'price': 15.25,
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1,
        'coupon': '  '                            // Optional fields may be omitted or set to empty string.
       },
       {
        'name': 'Donut Friday Scented T-Shirt',
        'id': '67890',
        'price': 33.75,
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Black',
        'quantity': 1
       }]
    }
  }
enhanced_conversion_data: {
      email : "ion.popescu@gmail.com",   // Required 
      phone_number: "072412345678",    // Required 
      first_name: "Ion",                               // Required 
      last_name: "Popescu",                      // Required 
      home_adress: {
           street: "Dumbrava Noua nr 1",    // Required 
           city: "Ploiesti",                             // Required 
           region: "Prahova",                       // Required 
           postal_code: "105556",               // Required 
           country: "Romania",                    // Required 
       }
   }
});
</script>
