import Hashids from 'hashids'
const hashids = new Hashids('salt', 8)

function issueUniqueString(...numbers: number[]): string {
  return hashids.encode(numbers)
}

export function random(max: number): number {
  return Math.floor(Math.random() * Math.floor(max))
}

export function issueID(uid): string {
  return issueUniqueString(uid, new Date().getTime(), random(9999))
}
