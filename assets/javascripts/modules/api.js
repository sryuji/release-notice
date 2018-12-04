import { database } from '@/config/firebase'

// TODO: interfaceを作り、firebase/graphqlでとclassで切り替える

// ユーザー別のデータ制御
// https://firebase.google.com/docs/database/security/user-security

// observeしないなら、once('value')方式でOK
// https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot
function fetch(child) {
  return new Promise((resolve, reject) => {
    database.child(child).once(
      'value',
      snapshot => {
        const val = snapshot.val()
        return resolve(val)
      },
      reject,
    )
  })
}

function set(child, data) {
  return database.child(child).set(data)
}

function remove(child) {
  return database.child(child).remove()
}

export function fetchByUid(key, uid, id = null) {
  const baseKey = `${key}/${uid}`
  const child = id ? baseKey + `/${id}` : baseKey
  return fetch(child)
}

export function setByUid(key, uid, id, data) {
  const baseKey = `${key}/${uid}`
  const child = id ? baseKey + `/${id}` : baseKey
  return set(child, data)
}

export function removeByUid(key, uid, id = null) {
  const baseKey = `${key}/${uid}`
  const child = id ? baseKey + `/${id}` : baseKey
  return remove(child)
}
