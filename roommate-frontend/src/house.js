const House = (function createHouse() {
	let privateCurrentHouse
	return class House {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.address = data.address
      this.roommates = data.users
      privateCurrentHouse = this
    }

		static currentHouse() {
			const house = privateCurrentHouse
			return house
		}

	}

})()
