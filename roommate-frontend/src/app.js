class App {
  static init() {

    Adapter.fetchUser()
    .then(data => new User(data))
    .then(user => {
      user.owned_bills.forEach(bill => {
        let ownedBill = new Bill(bill)
        ownedBill.payers = bill.payer_bills
      })
      user.payer_bills.forEach(payerBill => {
        let payBill = new Bill(payerBill.bill)
        payBill.amount = payerBill.amount
        payBill.owner = payerBill.bill.owner_name
        console.log(payBill)
      })

      const a = new House(user.house)
    })

    App.main = document.getElementById("main")


    document.getElementById("navigation").addEventListener("click", App.navFunctions)

    document.getElementById("content").addEventListener("click", App.contentFunctions)



  }

  static navFunctions(event) {
    if (event.target.id === "house") {
      return User.house()
    } else if (event.target.id === "createBill") {
      return Bill.createBillForm()
    } else if (event.target.id === "billHistory") {
      return User.billHistory()
    }
  }


  static contentFunctions(event) {
    if (event.target.id === "delete") {
      event.target.parentElement.parentElement.remove()
      Adapter.deleteBill(parseInt(event.target.dataset.id))
    } else if (event.target.id === 'edit') {
      console.log(event.target.id)
    } else if (event.target.className === 'billName') {
      //This is very hairy, but it works. I had to refactor some of the bill rendering functions to reuse the code.
        const billId = parseInt(event.target.parentElement.parentElement.dataset.id)
        User.billHeaderOwned()
        const billHeader = document.getElementById('billHeaderOwned')
        billHeader.innerHTML += Bill.findBillById(billId).renderOwnedShowBillRow() + User.currentUser().renderPayers(billId)

      // return Bill.showBill()
    }
  }

}
