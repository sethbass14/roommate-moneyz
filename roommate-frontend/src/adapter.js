class Adapter {
  static fetchUser() {
    return fetch('http://localhost:3000/api/v1/users/2').then(resp => resp.json())
  }

  static deleteBill(id) {
    return fetch(`http://localhost:3000/api/v1/bills/${id}`, {
      method: 'DELETE'
    })
  }
}
