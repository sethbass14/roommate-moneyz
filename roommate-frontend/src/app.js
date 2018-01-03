class App {
  static init() {
    document.getElementById("navigation").addEventListener("click", App.navFunctions)

    document.getElementById("content").addEventListener("click", App.contentFunctions)
  }

  static navFunctions(event) {
    console.log(event.target)
  }

  static contentFunctions() {
    console.log('content')
  }
}