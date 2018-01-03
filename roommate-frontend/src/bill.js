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

  static billHistory() {
    App.main.innerHTML = `
    <table id="payerTable">
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </table>`

    Adapter.fetchPayerBills().then(json => {
      json.structureBills.forEach(obj => {
        let newBill = new Bill(obj.bill)
        let newPayerBillAmount = obj.payer_bill.amount
        let newPayerBillId = obj.payer_bill.id
        document.getElementById('payerTable').innerHTML += newBill.renderPayerBillRow(newPayerBillAmount, newPayerBillId)
      })
    })
  }



  }

})()
