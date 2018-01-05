const Bill = (function createBillClass() {
  const allBills = []

  return class Bill {
    constructor(data) {
      //added this if statement to account for a user with no owned bill or no payerbill
      if (data) {
        this.id = data.id
        this.name = data.name
        this.total = data.total
        this.category = data.category
        this.due_date = data.due_date
        allBills.push(this)
      }
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
        <td><button data-id=${this.id} id="paid">Paid</button></td>
      </tr>`
    }

    static billHeaderPayer() {
      document.getElementById('main-header').innerHTML = "Current Bills"

      App.main.innerHTML = `
        <br>
        <h2>Money Owed</h2>
        <table id="billHeaderPayer" class="table">
        <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Pay To</th>
        <th>Paid?</th>
        </tr>
        </table>`

      let rows = Bill.allBills().filter(bill => bill.amount && bill.paid === false).map(bill => bill.renderPayerBillRow()).join("")

      document.getElementById('billHeaderPayer').innerHTML += rows
    }

    // I abstracted this funcionality below to be able to reuse the code.
   static billHeaderOwned() {
      App.main.innerHTML += `
        <br>
        <h2>Money$$$ To Collect</h2>
        <table id="billHeaderOwned" class="table">
        <tr>
        <th>Name</th>
        <th>Total</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        </table>`
        // Bill.buildOwnedRows() I abstracted this function out below. I may put it back
    }

    static buildOwnedRows() {
      let rows = Bill.allBills().filter(bill => bill.payers).map(bill => bill.renderOwnedBillRow()).join("")

      document.getElementById('billHeaderOwned').innerHTML += rows
    }

    renderOwnedBillRow() {
      //added the className to target this element with CSS and add an event listener for a click.
      return `
      <tr data-id=${this.id}>
        <td><p class="billName">${this.name}</p></td>
        <td>${this.total}</td>
        <td>${this.category}</td>
        <td>${this.due_date}</td>
        <td><button data-id=${this.id} id="edit">Edit</button></td>
        <td><button data-id=${this.id} id="delete">Delete</button></td>
      </tr>`
    }

    renderOwnedShowBillRow() {
      return `
      <tr data-id=${this.id}>
        <td><p class="billName">${this.name}</p></td>
        <td>${this.total}</td>
        <td>${this.category}</td>
        <td>${this.due_date}</td>
      </tr>`
    }

    // A way to grab a bill by its id
    static findBillById(id) {
      return Bill.allBills().find(bill => bill.id === id)
    }

    static noPayerBills() {
      App.main.innerHTML = '<h3>You do not owe any money right now.</h3>'
    }

    static noOwnedBills() {
      App.main.innerHTML += '<h3>None of your roommates owe you any money right now.</h3>'
    }

    static createBillForm() {
      App.main.innerHTML = `
        <form id="createBill">
          <input name="name"></input>
          <input name="total"></input>
          <input name="category"></input>
          <input name="due_date"></input>
          <div class ="form-check">
            <input></input>
          </div>
        </form>
      `
    }

    static paidBill(){
      let billId = parseInt(event.target.dataset.id)
      let parentElement = event.target.parentElement.parentElement.parentElement
      let childElement = event.target.parentElement.parentElement

      fetch('http://localhost:3000/api/v1/paid', {
        method: "PATCH",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({bill_id: `${billId}`, payer_id: 2})
      })

      parentElement.removeChild(childElement)

    }

    static renderBillHistory(){
      document.getElementById('main-header').innerHTML = "Paid Bill History"

      App.main.innerHTML = `
        <br>
        <table id="paidBillHistory" class="table">
        <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Due Date</th>
        <th>Paid To</th>
        <th>Paid On</th>
        </tr>
        </table>`

      let rows = Bill.allBills().filter(bill => bill.amount && bill.paid === true).map(bill => bill.renderBillHistoryRow()).join("")

      document.getElementById('paidBillHistory').innerHTML += rows
    }

    renderBillHistoryRow() {
      return `
      <tr data-id=${this.id}>
        <td>${this.name}</td>
        <td>${this.amount}</td>
        <td>${this.category}</td>
        <td>${this.due_date}</td>
        <td>${this.owner}</td>
        <td>${this.date_paid}</td>
      </tr>`
    }
  }
})()
