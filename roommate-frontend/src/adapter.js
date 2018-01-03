class Adapter {
  static fetchBills() {
    return fetch('http://localhost:3000/api/v1/bills').then(resp => resp.json())
  }

  static fetchPayerBills() {
    return fetch('http://localhost:3000/api/v1/users/2').then(resp => resp.json())
  }

}
