const mainForm = document.getElementById('mainForm')
const userFirst = document.getElementById('fist')
const userMail = document.getElementById('inp_mail')
const userOrder = document.getElementById('inp_order')
const userOrderList = document.getElementById('order-list')

function createElement(element, className = '', content = '') {
    const newElement = document.createElement(element)
    if (className) {
        newElement.className = className
    }
    if (content && typeof content === 'string') {
        newElement.textContent = content
        return newElement
    } else if(content) {
        newElement.append(content)
    }
    return newElement
}

function createOrder(event) {
    event.preventDefault()

    const orderItemInner = createElement('div')

    const orderItem = createElement('li', 'list-group-item d-flex justify-content-between', orderItemInner)

    const userFirstName = createElement('p', 'text-secondary', userFirst.value)

    const userEmail = createElement('a', 'text-primary user-email', userMail.value)
    userEmail.href = `mailto: ${userMail.value}`

    const elFormOrder = createElement('p', 'text-info', userOrder.value)

    const elButton = createElement('button', 'btn-success', 'ok')

    orderItemInner.append(userFirstName, userEmail, elFormOrder)
    orderItem.append(elButton)
    userOrderList.append(orderItem)
}

mainForm.addEventListener('submit', createOrder)