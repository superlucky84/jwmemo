//import { INCREASE, DECREASE } from '../constants'

/**
 * ADD NOTE
 */
export function writeNote () {
  return {
    type: 'WRITENOTE'
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
export function deleteNote () {
  return {
    type: 'DELETENOTE',
  }
}

/**
 * GET LIST
 */
export function getList () {
  return {
    type: 'GETLIST'
  }
}

/**
 * GET ONE
 */
export function getOne (id) {
  return {
    type: 'GETONE',
    id
  }
}


export function updateForm (type, text) {
  return {
    type: 'UPDATEFORM_' + type.toUpperCase(),
    text 
  }
}
