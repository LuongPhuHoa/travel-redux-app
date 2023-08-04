import Dexie from 'dexie'

const db = new Dexie('TravelApp')
db.version(1).stores({
  travel: '++id, name, location, group, date, price, description, image, rating'
});

export const TravelTable = db.table('travel')
export default db