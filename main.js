class FetchReq {
  getAll(url) {
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json))
  }
  async getTaskById(url, id) {
    try {
      console.log(`${url}${id}`)
      const res = await fetch(`${url}${id}`)
      const json = await res.json()
      console.log(JSON.stringify(json))
    } catch (error) {
      console.error(error)
    }
  }
  async post(url) {
    try {
      const res = await fetch(url, {
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
      const json = await res.json()
      console.log(JSON.stringify(json))
    } catch (error) {
      console.error(error)
    }
  }
  async patch(url, id, body) {
    console.log(`${url}${id}`)
    try {
      const res = await fetch(`${url}${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  async delete(url, id) {
    try {
      const res = await fetch(`${url}${id}`, { method: 'DELETE' })
      return await res.json()
    } catch (err) {
      console.error(err)
    }
  }
}

let x = new FetchReq()
// x.getAll('https://tasks-service-maks1394.amvera.io/tasks/')
// x.post('https://tasks-service-maks1394.amvera.io/tasks') // создал задачку с Id:5
// x.patch('https://tasks-service-maks1394.amvera.io/tasks/', '5', {
//   name: 'Hell Yeah',
// })
// x.getTaskById('https://tasks-service-maks1394.amvera.io/tasks/', '5')

// x.getTaskById('https://tasks-service-maks1394.amvera.io/tasks/', '4')
