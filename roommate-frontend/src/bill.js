const Bill = (function createBillClass() {
  const allBills = []

  return class Bill {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.total = data.total
      this.category = data.category
      this.due_date = data.due_date
      this.owner_id = data.owner_id
      allBills.push(this)
    }

  renderPayerBillRow(newPayerBillAmount, newPayerBillId) {
    return `
    <tr data-id=${newPayerBillId}>
      <td>${this.name}</td>
      <td>${newPayerBillAmount}</td>
      <td>${this.category}</td>
      <td>${this.due_date}</td>
      <td><button data-id=${newPayerBillId} id="edit">Edit</button></td>
      <td><button data-id=${newPayerBillId} id="delete">Delete</button></td>
    </tr>`
  }

  static createBill() {
    // form + post request
    // console.log(bill)

  }

  static billTable(bill) {
    App.main.innerHTML = `
      <table id="">
      <tr>
      <th>Name</th>
      ${bill.amount? <th>Amount</th> : <th>Total</th>}
      <th>Category</th>
      <th>Due Date</th>
      <th>Edit</th>
      <th>Delete</th>
      </tr>
      </table>`

  }

  static billHistory() {

    if (User.currentUser().payer_bills.length ) {
      // iterate through the array and renderPayerBillRow
    }

    if (User.currentUser().owned_bills.length) {
      //iterate throught the array and render an instance method to generate html
    }



  // document.getElementById('payerTable').innerHTML += newBill.renderPayerBillRow(newPayerBillAmount, newPayerBillId)

  }



  }

})()
