class Adapter {
  static fetchHouse() {
    return fetch('http://localhost:3000/api/v1/houses/1').then(resp => resp.json())
  }

  static fetchUser() {
    return fetch('http://localhost:3000/api/v1/users/2').then(resp => resp.json())
  }

  static createBill(name, category, total, due_date, owner_id, payers) {
    return fetch('http://localhost:3000/api/v1/bills', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({name: `${name}`, category: `${category}`, total: `${total}`, due_date: `${due_date}`, owner_id: `${owner_id}`, payers: `${payers}`})

      body: JSON.stringify({
        "name": name,
        "category": category, 
        "total": total, 
        "due_date": due_date, 
        "owner_id": owner_id, 
        "payers": payers
      })
    })
  }

}
