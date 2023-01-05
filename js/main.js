const customerList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')

function renderUsers(){
    customerList.innerHTML = null
    for (const user of users) {
        const [li,span,a] = createElements('li','span','a')
        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')

        a.setAttribute('href', user.contact)
        span.innerHTML = user.userName
        a.innerHTML = user.contact

        li.append(span,a)
        customerList.append(li)

        li.addEventListener('click', () => {
            renderOrders(user.userId)
            clientId.textContent = user.userId
            customerName.textContent = user.userName
            

            window.localStorage.setItem('userId',userId)
            window.localStorage.setItem('username',userName)
        })
    }

}
function renderFoods(){
    for (const food of foods) {
        const [option] = createElements('option')
        option.textContent = food.foodName
        option.value = food.foodId
        foodsSelect.append(option)
        
    }
}
function renderOrders(userId){
    if(!userId) return
    ordersList.innerHTML = null
        for(let order of orders){
            if(!(order.userId == userId)) continue

            const food = foods.find(el => el.foodId == order.foodId)
            // console.log(food) 


            const [liEl,imgEl,divEl,nameEl,countEl] = createElements('li','img','div','span','span')
            
            liEl.classList.add('order-item')
            nameEl.classList.add('order-name')
            countEl.classList.add('order-count')
            imgEl.setAttribute('src',food.foodimg)

            nameEl.textContent = food.foodName
            countEl.textContent = order.count


            divEl.append(nameEl,countEl)

            liEl.append(imgEl,divEl)
            ordersList.append(liEl)

        }
}

function addUser(){}



function addOrder(event){
    event.preventDefault()

    const foodId = foodsSelect.value.trim()
    const count = foodsSelect.value.trim()
    const userId = foodsSelect.value.trim()

    let order = orders.find(el => el.foodId == foodId && el.userId == userId)


    if(
        !count ||
        +count > 10 ||
        !userId
    ) return

    if(order){
        order.count += +count 
    }else{
        order = {foodId,userId,count}
        orders.push(order)
    }

   window.localStorage.setItem('orders', JSON.stringify(orders))
    return renderOrders(userId)

}




userAdd.addEventListener('submit',(event) =>{
    event.preventDefault()

    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if(!username || username.length > 20){
        return alert('Ismni to`g`ri kiriting')
    }
    
    if(!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
        return alert('Invalid Contact')
    }

    const newUser = {
        userid: users.length ? users[users.length - 1].userId + 1 : 1,
        username,
        contact
    }

    users.push(newUser)
    window.localStorage.setItem('users', JSON.stringify(users))

    return renderUsers()
})
foodsForm.addEventListener('submit',addOrder)

const userId = window.localStorage.getItem('userId')
const username = window.localStorage.getItem('username')

username && (customerName.textContent = username)
username && (clientId.textContent = userId)


renderFoods()
renderUsers()
renderOrders(userId)
