//IMPLEMENTARE EVENT ADAUGARE PRODUS IN COS
//Event addToCart care sa impinga informatii despre produsele adaugate in cos. Mandatory sunt name, id, price si quantity.


// Measure adding a product to a shopping cart by using an 'add' actionFieldObject
// and a list of productFieldObjects.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'event': 'addToCart',
  'ecommerce': {
    'currencyCode': 'EUR',
    'add': {                                // 'add' actionFieldObject measures.
      'products': [{                        //  adding a product to a shopping cart.
        'name': 'Triblend Android T-Shirt',
        'id': '12345',
        'price': 15.25,
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1
       }]
    }
  }
});
