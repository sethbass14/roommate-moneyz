class App {
  static init() {
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