class FetchReq {
  get(url) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
}

let x = new FetchReq()
x.get('https://tasks-service-maks1394.amvera.io/tasks')
