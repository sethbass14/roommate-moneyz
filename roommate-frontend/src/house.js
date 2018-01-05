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

    static roomies() {
      return House.currentHouse().roommates.filter(roommates => {
        return roommates.name !== User.currentUser().name
      })
    }

		static renderHouse() {
			document.getElementById("main-header").innerHTML = `Welcome, ${User.currentUser().name}`
			App.main.innerHTML = `
				<br>
				<div class="row">
					<div class="col-sm-6">
						<center><h2>Your House</h2></center>
						<img id="main-image" width="500" height="334" src="https://vignette.wikia.nocookie.net/family-guy-the-quest-for-stuff/images/d/d0/Fg_building_griffinHouse_Xmas2016_Pixel.png">
						<center><h2>${this.currentHouse().name}</h2></center>
						<center><h2>${this.currentHouse().address}</h2></center>
					</div>
					<div class="col-sm-6" id="list-roommates">
						<center><h2>Your Roommates</h2></center>
						</div>
					</div>
				</div>`

				document.getElementById("list-roommates").innerHTML += House.renderRoommates().join("")

		}

		static renderRoommates() {
			let filteredRoommates = House.currentHouse().roommates.filter(roommate => roommate.id !== User.currentUser().id)
			return filteredRoommates.map(roommate => `
				<br>
				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<img width="100px" height="100px" src=${roommate.avatar}>
						</div>
						<div class="col-sm-9">
							<h3>${roommate.name}, ${roommate.phone}</h3><br>
						</div>
					</div>
				</div>
				`)
		}


	}

})()
