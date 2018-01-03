const User = (function createUserClass() {
  const allUsers = []

  return class User {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.phone = data.phone
      this.payer_bills = []
      this.owned_bills = []

    }
  }
}

)()
