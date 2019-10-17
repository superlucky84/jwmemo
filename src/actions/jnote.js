//import { INCREASE, DECREASE } from '../constants'


ssssssssssssssssssssssss
/**
 * SCROLL_CHANGE
 */
export function scrollChange (scroll) {
  return {
    type: 'SCROLL_CHANGE',
    scroll
  };
}

/**
 * SHORTCUT_CHANGE
 */
export function shortcutChange (command) {
  return {
    type: 'SHORTCUT_CHANGE',
    command
  };
}

/**
 * ADMIN_CHANGE
 */
export function adminChange (bool) {
  return {
    type: 'ADMIN_CHANGE',
    bool
  };
}

/**
 * OPEN_DIALOG
 */
export function openDialog (dialogtype, message, successaction=null, failaction=null) {
  return {
    type: 'OPEN_DIALOG',
    dialogtype,
    message,
    successaction,
    failaction
  };
}

/**
 * CLOSE_DIALOG
 */

export function closeDialog () {
  return {
    type: 'CLOSE_DIALOG',
  };
}

/**
 * TOGGLE_FAVORITE
 */
export function toggleFavorite (id, idx) {
  return {
    type: 'TOGGLE_FAVORITE',
    id,
    idx
  };
}


/**
 * TOGGLE_PREVIEW
 */
export function togglePreview () {
  return {
    type: 'TOGGLE_PREVIEW'
  };
}

/**
 * ADD NOTE
 */
export function writeNote () {
  return {
    type: 'WRITENOTE',
    data: null
  };
}

/**
 * UPDATE NOTE
 */
export function editNote (id) {
  return {
    type: 'EDITNOTE',
    id,
    idx: null,
    data: null
  };
}

/**
 * DELETE NOTE
 */
export function deleteNote () {
  return {
    type: 'DELETENOTE',
    idx: null
  };
}

/**
 * GET LIST
 */
export function getList (searchString) {
  return {
    type: 'GETLIST',
    searchString,
    list: []
  };
}

/**
 * GET ONE
 */
export function getOne (id) {
  return {
    type: 'GETONE',
    id,
    info: {}
  };
}


export function updateForm (type, text) {
  return {
    type: 'UPDATEFORM_' + type.toUpperCase(),
    text 
  };
}
