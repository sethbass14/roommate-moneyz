const Bill = (function createBillClass() {
  const allBills = []

  return class Bill {
    constructor(data) {
      this.name = data.name
      this.total = data.total
      this.category = data.category
      this.due_date = data.due_date
      this.owner_id = data.owner_id
      allBills.push(this)
    }

  renderBillRow() {
    return `
    <tr data-id=${this.id}>
      <td>${this.name}</td>
      <td>${this.total}</td>
      <td>${this.category}</td>
      <td>${this.due_date}</td>
      <td><button data-id=${this.id} id="edit">Edit</button></td>
      <td><button data-id=${this.id} id="delete">Delete</button></td>
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
        <th>Total</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </table>`

    Adapter.fetchPayerBills().then(json => console.log(json.payer_bills))
    // Adapter.fetchPayerBills().then(json => {
    //   // json.payer_bills.forEach(bill => {
    //   //   // let newBill = new Bill(bill)
    //   //   // // debugger
    //   //   // document.getElementById('payerTable').appendChild(newBill.renderBillRow())
    //   // })
    // })
    }



  }

})()