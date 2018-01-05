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
      document.getElementById('main-header').innerText = "Bills"

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
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        </table>`

      let rows = Bill.allBills().filter(bill => bill.amount).map(bill => bill.renderPayerBillRow()).join("")

      document.getElementById('billHeaderPayer').innerHTML += rows
    }

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

        let rows = Bill.allBills().filter(bill => bill.payers).map(bill => bill.renderOwnedBillRow()).join("")

        document.getElementById('billHeaderOwned').innerHTML += rows
    }

    renderOwnedBillRow() {
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

    static noPayerBills() {
      App.main.innerHTML = '<h3>You do not owe any money right now.</h3>'
    }

    static noOwnedBills() {
      App.main.innerHTML += '<h3>None of your roommates owe you any money right now.</h3>'
    }

    static createBillForm() {
      document.getElementById('main-header').innerText = "Create a New Bill"
      App.main.innerHTML = `
      <br>
      <div class="container">
      <div class="row">
      <div class="col col-sm-6 col-md-6">
        <form id="createBill">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="total">Total Amount</label>
            <input type="number" class="form-control" id="total"></input>
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input type="text" class="form-control" id="category">
          </div>
          <div class="form-group">
            <label for"due-date">Date Due</label>
            <input type="date" class="form-control" id="due_date">
          </div>
          <br>
          <hr>
          <h5>Split Bill with Roommate:</h5><br>
          <div class="form-row" id="roommateAdd">
            <div class="form-group col-md-6">
              <label for="amountSplit">Charge Amount</label>
              <input type="number" class="form-control" id="amountSplit">
            </div>
            <div class="form-group col-md-6">
              <label for="roommate"> Roommate</label>
              <select id="roommate" class="form-control">
              ${House.roomies().map(user => {
                return `<option data-id="${user.id}">${user.name}</option>`
              })}
              </select>
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary" style="float: right" id="buttonAddRoommate">Add Another Roommate</button><br><br><hr>
          <button type="submit" class="btn btn-primary" id="submitNewBill">Submit</button>
        </form>
        </div>
        </div>
      </div>
      `
    }

    static addRoommateForm() {
      // right now can only add 2 roommates onto bill...
      // glitch with dropdown 
      // make code for generating HTML DRY on refactor
      // for refactoring:
      // function renderFormOption() {
      //     return `<option data-id="${this.id}">${this.name}</option>`
      //   }

      document.getElementById('buttonAddRoommate').remove()
      document.getElementById('roommateAdd').innerHTML += `
        <div class="form-group col-sm-12 col-md-6">
          <label for="amountSplit2">Charge Amount</label>
          <input type="number" class="form-control" id="amountSplit2">
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label for="roommate2"> Roommate</label>
          <select id="roommate2" class="form-control">
          ${House.roomies().filter(roomie => {
            return document.getElementById('roommate').value !== roomie.name
          }).map(user => {
            return `<option data-id="${user.id}">${user.name}</option>`
          })}
          </select>
        </div>`
    }

    static createBill() {
      event.preventDefault()
      //name, category, total, due_date, owner_id
      const name = document.getElementById("name").value
      const total = document.getElementById("total").value
      const category = document.getElementById("category").value
      const due_date = document.getElementById("due_date").value
      const owner_id = User.currentUser().id

      const payers = []

      if (document.getElementById("amountSplit").value !== "") {
        const amount1 = document.getElementById("amountSplit").value
        const payer1Id = House.roomies().find(roomie => {
          return roomie.name === document.getElementById('roommate').value
        }).id

        payers.push({amount: amount1, payer: payer1Id})
      }

      if (document.getElementById('buttonAddRoommate') === null) {
        const amount2 = document.getElementById('amountSplit2').value
        const payer2Id = House.roomies().find(roomie => {
          return roomie.name === document.getElementById('roommate2').value
        }).id

        payers.push({amount: amount2, payer: payer2Id})
      }

      Adapter.createBill(name, category, total, due_date, owner_id, payers).then(json => {
        let bill = new Bill(json)

        // replace with show Bill render on merge
        document.getElementById('main-header').innerText = "Your Bill"
        App.main.innerHTML = 
          `<h2>${bill.name}</h2>
        `
      })




    }


  }
})()
