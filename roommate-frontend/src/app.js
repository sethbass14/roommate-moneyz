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
      })

      const a = new House(user.house)
      debugger
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

  static contentFunctions() {
    console.log('content')
  }
}
