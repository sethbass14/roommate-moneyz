const User = (function createUserClass() {
  let currentUser

  return class User {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.phone = data.phone
      this.payer_bills = []
      this.owned_bills = []
      currentUser = this
    }

    static currentUser() {
      return currentUser
    }

  }

}

)()
