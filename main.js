class FetchReq {
  getAll(url) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  async getTaskById(url, id) {
    try {
      console.log(`${url}${id}`)
      const response = await fetch(`${url}${id}`)
      const json = await response.json()
      console.log(JSON.stringify(json))
    } catch (error) {
      console.error(error)
    }
  }
  async post(url) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: 'Сделать ДЗ',
          info: 'Написать 2 класса',
          isImportant: true,
          isCompleted: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      console.log(JSON.stringify(json))
    } catch (error) {
      console.error(error)
    }
  }
}

let x = new FetchReq()
x.getTaskById('https://tasks-service-maks1394.amvera.io/tasks/', '4')
// x.post('https://tasks-service-maks1394.amvera.io/tasks') // создал задачку с Id:4
