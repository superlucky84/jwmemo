//import { INCREASE, DECREASE } from '../constants'

/**
 * ADD NOTE
 */
export function writeNote (title,note) {
  return {
    type: 'WRITENOTE',
    title,
    note
  }
}

/**
 * UPDATE NOTE
 */
function updateNote () {
  return {
    type: 'UPDATENOTE',
    id,
    note
  }
}

/**
 * DELETE NOTE
 */
function deleteNote () {
  return {
    type: 'DELETENOTE',
    id
  }
}
