//import { INCREASE, DECREASE } from '../constants'


/**
 * TOGGLE_PREVIEW
 */
export function openDialog (dialogtype, message, successaction=null, failaction=null) {
  return {
    type: 'OPEN_DIALOG',
    dialogtype,
    message,
    successaction,
    failaction
  }
}
export function closeDialog () {
  return {
    type: 'CLOSE_DIALOG',
  }
}

/**
 * TOGGLE_PREVIEW
 */
export function togglePreview () {
  return {
    type: 'TOGGLE_PREVIEW'
  }
}

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
export function editNote (id) {
  return {
    type: 'EDITNOTE',
    id
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
