import superagent from 'superagent'

export class User {
  constructor () {
    this.position = null
  }

  async setCurrentPosition () {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position, error) => {
        if (error) return reject(error)
        resolve(position.coords)
      })
    })
    this.position = position
  }
}

export class Dining {}

export class DiningList {
  constructor () {
    this.dinings = []
  }

  async search (position) {
    const dinings = []
    const response = await superagent
    .get(process.env.GOOGLE_NEARBY_API_URL)
    .query({
      key: process.env.GOOGLE_API_KEY,
      location: `${position.latitude},${position.longitude}`,
      radius: 900,
      language: 'ja',
      type: 'restaurant'
    })
    console.log(response)
    this.dinings = dinings
  }
}
