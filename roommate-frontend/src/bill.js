const Bill = (function createBillClass() {
  const allBills = []

  return class Bill {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.total = data.total
      this.category = data.category
      this.due_date = data.due_date
      allBills.push(this)
    }

    static allBills() {
      return [...allBills]
    }

    renderPayerBillRow() {
      return `
      <tr data-id=${this.id}>
        <td>${this.name}</td>
        <td>${this.amount}</td>
        <td>${this.category}</td>
        <td>${this.due_date}</td>
        <td>${this.owner}</td>
        <td><button data-id=${this.id} id="edit">Edit</button></td>
        <td><button data-id=${this.id} id="delete">Delete</button></td>
      </tr>`
    }

    static billHeaderPayer() {
      App.main.innerHTML = `
        <table id="billHeaderPayer" class="table">
        <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Pay To</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        </table>`

      let rows = Bill.allBills().filter(bill => bill.amount).map(bill => bill.renderPayerBillRow()).join("")

      document.getElementById('billHeaderPayer').innerHTML += rows
    }

    static noPayerBills() {
      App.main.innerHTML = '<h2>You do not owe any money right now.</h2>'
    }

    static noOwnedBills() {
      App.main.innerHTML += '<h2>None of your roommates owe you any money right now.</h2>'
    }

  }
})()
