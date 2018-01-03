class App {
  static init() {
    Adapter.fetchUser().then(json => {
      const fetchedUser = new User({id: json.id, name: json.name, phone: json.phone})
      json.owned_bills.map(bill => {
        const ownedBill = new Bill(bill)
        fetchedUser.owned_bills.push(ownedBill)
      })
      json.structureBills.forEach(obj => {
        const payerBill = new Bill(obj.bill)
        payerBill.amount = obj.payer_bill.amount
        fetchedUser.payer_bills.push(payerBill)
      })

    } )

    App.main = document.getElementById("main")

    document.getElementById("navigation").addEventListener("click", App.navFunctions)

    document.getElementById("content").addEventListener("click", App.contentFunctions)

  }

  static navFunctions(event) {
    if (event.target.id === "house") {
      return User.house()
    } else if (event.target.id === "bills") {
      console.log("billz")
    } else if (event.target.id === "createBill") {
      return Bill.createBill()
    } else if (event.target.id === "billHistory") {
      return Bill.billHistory()
    }
  }

  static contentFunctions() {
    console.log('content')
  }
}
