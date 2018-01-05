const User = (function createUserClass() {
  let privateCurrentUser

  return class User {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.phone = data.phone
      this.house = data.house
      this.payer_bills = data.payer_bills
      this.owned_bills = data.owned_bills
      privateCurrentUser = this
    }

    renderPayers(bill_id) {
      const ownedBill = this.owned_bills.find(bill => bill.id === bill_id)
      let header = `
      <table id="payers" class="table">
        <tr>
        <th>Roomie</th>
        <th>$$$ THEY OWE YOU</th>
        </tr>
      </table>
      `
      ownedBill.payer_bills.map(payer_bill => {
        header += `
        <tr data-id=${payer_bill.id}>
          <td>${payer_bill.payer_name}</p></td>
          <td>$${payer_bill.amount}</td>
        </tr>`
      })

      return header
    }

    static currentUser() {
      const currentUser = privateCurrentUser
      return currentUser
    }


    static billHeaderOwned() {
      App.main.innerHTML = `
        <br>
        <h2>Money$$$ To Collect</h2>
        <table id="billHeaderOwned" class="table">
        <tr>
        <th>Name</th>
        <th>Total</th>
        <th>Category</th>
        <th>Due Date</th>
        </tr>
        </table>`
    }



    static currentBills() {
      if (User.currentUser().payer_bills.length) {
        Bill.billHeaderPayer();
      } else if (User.currentUser().payer_bills.length === 0) {
        Bill.noPayerBills();
      }

      if (User.currentUser().owned_bills.length) {
        Bill.billHeaderOwned();
        Bill.buildOwnedRows()
      } else if (User.currentUser().owned_bills.length === 0) {
        Bill.noOwnedBills();
      }
    }

    static ownedBillShow(billId) {
      User.billHeaderOwned()
      const billHeader = document.getElementById('billHeaderOwned')
      billHeader.innerHTML += Bill.findBillById(billId).renderOwnedShowBillRow() + User.currentUser().renderPayers(billId)
    }

    static billHistory() {
      Bill.renderBillHistory()
    }

    static houseInfo() {
      House.renderHouse()
    }
  }
})()
