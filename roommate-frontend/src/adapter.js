class Adapter {
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

      body: JSON.stringify({
        "name": name,
        "category": category,
        "total": total,
        "due_date": due_date,
        "owner_id": owner_id,
        "payers": payers
      })
    }).then(resp => resp.json())
  }

  static deleteBill(id) {
    return fetch(`http://localhost:3000/api/v1/bills/${id}`, {
      method: "DELETE"
    })
  }

  static paidBill(billId, userId) {
    return fetch('http://localhost:3000/api/v1/paid', {
      method: "PATCH",
      headers: {"Accept": "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({bill_id: billId, payer_id: userId})
    })
  }
}
