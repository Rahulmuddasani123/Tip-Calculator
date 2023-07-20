let bill = document.getElementById('bill').value
let tip_percent = document.getElementById('tip_percent').value
let tip_amount = parseInt(bill) * (parseInt(tip_percent) / 100)

function calculate() {
    let bill = document.getElementById('bill').value
    let tip_percent = document.getElementById('tip_percent').value

    if (bill === '' || tip_percent === '') {
        document.getElementById('error_message ').textContent = 'Enter a valid input'
    }
    if (bill != '' && tip_percent != '') {
        document.getElementById('error_message ').textContent = ''

        let tip_amount = parseInt(bill) * (parseInt(tip_percent) / 100)
        let total_bill = parseInt(bill) + tip_amount
        document.getElementById('tip_amount').value = Math.ceil(tip_amount)
        document.getElementById('total_bill').value = Math.ceil(total_bill)
    }

}