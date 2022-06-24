await db.collection('contacts').insertMany([
  {
    name: {
      first: "John",
      middle: "Cue",
      last: "Public"
    },
    address: {
      street: "8888 Main Street",
      city: "Cannon",
      state: "Delaware",
      zip: "19797"
    },
    phone: [
      {
        number: "111-111-1111",
        type: "home"
      },
      {
        number: "011-111-1111",
        type: "mobile"
      }
    ],
    email: "john.q.public@testmail.test"
  },
  {
    name: {
      first: "Abel",
      middle: "Cue",
      last: "Public"
    },
    address: {
      street: "8888 Main Street",
      city: "Cannon",
      state: "Delaware",
      zip: "19797"
    },
    phone: [
      {
        number: "111-111-1111",
        type: "home"
      },
      {
        number: "211-111-1111",
        type: "mobile"
      }
    ],
    email: "abel.q.public@testmail.test"
  },
  {
    name: {
      first: "Abel",
      middle: "Cue",
      last: "Smith"
    },
    address: {
      street: "8888 Main Street",
      city: "Cannon",
      state: "Delaware",
      zip: "19797"
    },
    phone: [
      {
        number: "111-111-1111",
        type: "home"
      },
      {
        number: "211-111-1111",
        type: "mobile"
      }
    ],
    email: "abel.q.mublic@testmail.test"
  },
  {
    name: {
      first: "Mike",
      middle: "Cue",
      last: "Mublic"
    },
    address: {
      street: "8888 Main Street",
      city: "Cannon",
      state: "Delaware",
      zip: "19797"
    },
    phone: [
      {
        number: "211-111-1111",
        type: "mobile"
      }
    ],
    email: "Mike.q.mublic@testmail.test"
  },
])
