import delay from './delay'

const listOfRSVPs = [
  {
    id: "58c79faaf69737058fbe8c19",
    contactInfo: {
      firstName: "Peter",
      lastName: "aguilar",
      emailAddress: "peter.aguilar2287@gmail.com",
      phoneNumber: "248-385-7905",
      streetAddress: {
        line1: "address",
        line2: null,
        city: "Denver",
        state: "CO",
        zip: "80212"
      }
    },
    attending: "Yes",
    numberOfAttending: 2,
    mealChoice: [
      "chicken",
      "steak",
      "food",
      "juice"
    ],
    songRequests: [
      {
        artist: "Nelly",
        albumName: "St Louis",
        songName: "Country Grammer"
      },
      {
        artist: "Tupac",
        albumName: "All Eyes on Me",
        songName: "Another Tupac Song"
      }
    ]
  },
  {
    id: "58e262e00a73fc0518c47da3",
    contactInfo: {
      firstName: "Alice",
      lastName: "aguilar",
      emailAddress: "peter.aguilar2287@gmail.com",
      phoneNumber: "248-385-7905",
      streetAddress: {
        line1: "address",
        line2: null,
        city: "Denver",
        state: "CO",
        zip: "80212"
      }
    },
    attending: "Yes",
    numberOfAttending: 2,
    mealChoice: [
      "chicken",
      "steak",
      "food",
      "juice"
    ],
    songRequests: [
      {
        artist: "Nelly",
        albumName: "St Louis",
        songName: "Country Grammer"
      },
      {
        artist: "Tupac",
        albumName: "All Eyes on Me",
        songName: "Another Tupac Song"
      }
    ]
  }
]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace)
}

const generateId = (rsvp) => {
  return replaceAll(rsvp.firstName, ' ', '_')
}

class RSVPApi {
  static getRSVPs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], listOfRSVPs))
      }, delay)
    })
  }

  static saveRSVP(rsvp) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rsvp.id) {
          const existingRSVPIndex = rsvp.findIndex(a => a.id == rsvp.id)
          rsvp.splice(existingRSVPIndex, 1, rsvp)
        } else {
          rsvp.id = generateId(rsvp)
          listOfRSVPs.push(rsvp)
        }

        resolve(Object.assign({}, rsvp))
      }, delay)
    })
  }

  static deleteRSVP(rsvpId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfRSVPToDelete = listOfRSVPs.findIndex(rsvp => {
          rsvp.rsvpId == rsvpId
        })
        listOfRSVPs.splice(indexOfRSVPToDelete, 1)
        resolve()
      }, delay)
    })
  }
}

export default RSVPApi
