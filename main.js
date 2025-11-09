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
  async post(url, body) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
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
class XMLReq {
  getAll(url) {
    const req = new XMLHttpRequest()
    req.open('GET', url)
    req.responseType = 'json'
    req.onload = function () {
      const data = req.response
      console.log(data)
    }
    req.send()
  }
  getTaskById(url, id) {
    const req = new XMLHttpRequest()
    req.open('GET', `${url}${id}`)
    req.responseType = 'json'
    req.onload = function () {
      const data = req.response
      console.log(data)
    }
    req.send()
  }
  post(url, body) {
    const req = new XMLHttpRequest()
    const json = JSON.stringify(body)

    req.open('POST', url)
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    req.responseType = 'json'
    req.onload = function () {
      const data = req.response
      console.log(data)
    }
    req.send(json)
  }
  patch(url, id, body) {
    const req = new XMLHttpRequest()
    const json = JSON.stringify(body)
    req.open('PATCH', `${url}${id}`)
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    req.responseType = 'json'
    req.onload = function () {
      const data = req.response
      console.log(data)
    }
    req.send(json)
  }
  delete(url, id) {
    const req = new XMLHttpRequest()
    req.open('DELETE', `${url}${id}`)
    req.onload = () => {
      if (req.status === 200) {
        console.log('Удалено')
      } else {
        console.error('Ошибка!!!!!!')
      }
    }
    req.send()
  }
}
class ReqFasad {
  constructor(api) {
    this.api = api
  }

  getAll(url) {
    return this.api.getAll(url)
  }
  getTaskById(url, id) {
    return this.api.getTaskById(url, id)
  }
  post(url, body) {
    return this.api.post(url, body)
  }
  patch(url, id, body) {
    return this.api.patch(url, id, body)
  }
  delete(url, id) {
    return this.api.delete(url, id)
  }
}
// ===============================
let fasad = new ReqFasad(new FetchReq())
