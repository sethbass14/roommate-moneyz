class Adapter {
  static fetchHouse() {
    return fetch('http://localhost:3000/api/v1/houses/1').then(resp => resp.json())
  }

  static fetchUser() {
    return fetch('http://localhost:3000/api/v1/users/2').then(resp => resp.json())
  }

  static deleteBill(id) {
    return fetch(`http://localhost:3000/api/v1/bills/${id}`, {
      method: 'DELETE'
    })
  }

}
