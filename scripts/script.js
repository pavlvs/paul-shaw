
// Get the current year for the copyright
$('#year').text(new Date().getFullYear())

$('.port-item').click(function () {
    $('.collapse').collapse('hide')
})

const email = document.getElementById('email')
const name = document.getElementById('name')
const message = document.getElementById('message')
const contactlink = document.getElementById('contactlink')

contactlink.addEventListener('click', ev => {
    console.log('we are clicking the bastard')
    email.value = ''
    message.value = ''
    name.value = ''
})

function clearFields() {
    frm.submit()


}
