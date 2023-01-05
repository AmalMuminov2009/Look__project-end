let users = window.localStorage.getItem('users')
let foods = window.localStorage.getItem('foods')
let orders = window.localStorage.getItem('orders')


users = JSON.parse(users) || [
    { userId: 1, userName: 'Rustam', contact: '+998949142318'},
    { userId: 2, userName: 'Timur', contact: '+998949141718'},
    { userId: 3, userName: 'Salim', contact: '+998949147718'},
    { userId: 4, userName: 'Sevinch', contact: '+998949140018'},
    { userId: 5, userName: 'Ilhom', contact: '+998949141818'},   
]

foods = JSON.parse(foods) || [
    { foodId: 1, foodName: 'burger cheese', foodimg: './img/burger_cheese.jpeg'},
    { foodId: 2, foodName: 'chicken togora', foodimg: './img/chicken_togora.jpeg'},
    { foodId: 3, foodName: 'chicken wings ', foodimg: './img/chicken_wings.jpeg'},
    { foodId: 4, foodName: 'cola', foodimg: './img/cola.jpeg'},
    { foodId: 5, foodName: 'comba', foodimg: './img/combo.jpeg'},
    { foodId: 6, foodName: 'fanta', foodimg: './img/fanta.jpeg'},
    { foodId: 7, foodName: 'spinner', foodimg: './img/spinner.jpeg'},
]

orders = JSON.parse(orders) || [
    { userId: 1, foodId: 1, count: 2},
    { userId: 2, foodId: 7, count: 2},
    { userId: 3, foodId: 5, count: 3},
    { userId: 4, foodId: 6, count: 7},
    { userId: 5, foodId: 3, count: 1},
]