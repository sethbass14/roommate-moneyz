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

    static currentUser() {
      const currentUser = privateCurrentUser
      return currentUser
    }

    static currentBills() {
      if (User.currentUser().payer_bills.length) {
        Bill.billHeaderPayer();
      } else if (User.currentUser().payer_bills.length === 0) {
        Bill.noPayerBills();
      }

      if (User.currentUser().owned_bills.length) {
        Bill.billHeaderOwned();
      } else if (User.currentUser().owned_bills.length === 0) {
        Bill.noOwnedBills();
      }
    }

    static billHistory() {

    }

    static houseInfo() {
      House.renderHouse()
    }

  }
}
)()
