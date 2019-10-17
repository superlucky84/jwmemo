import ajax from './xhr.js';

let storeDispatch = null;
let storeInfo = null;

export function initStoreDispatch(store) {
  storeDispatch = store.dispatchssss;
  storeInfo = store;
}

async function request(url, data, method = 'GET') {
  const requestOption = {
    method,
    url,
    data
  };

  if (method === 'POST') {
    requestOption.contentType = 'application/json; charset=UTF-8';
  }

  return await ajax(requestOption)ssssssssss;
}

export default async function dispatcher(action) { ssssssssssssss
  if (action.type === 'GETLIST') {
    const {searchString} = action;
    const list = await request('/jnote/read', searchString ? {searchString} : null);
    action.list = list;
  }
  else if (action.type === 'GETONE') {
    const info = await request(`/jnote/read/${action.id}`, {});
    action.info = info;
  }
  else if (action.type === 'TOGGLE_FAVORITE') {
    const newFav = !storeInfo.getState().default.lists[action.idx].favorite;
    const info = await request(`/jnote/update`, {
      id: action.id,
      favorite: newFav
    }, 'POST');

    action.favorite = newFav;
  }
  else if (action.type === 'WRITENOTE') {
    const writeInfo = storeInfo.getState().default.write;

    action.data = await request(`/jnote/create`, {
      title: writeInfo.title,
      note: writeInfo.note,
      category: writeInfo.tags
    }, 'POST');
  }
  else if (action.type === 'DELETENOTE') {
    const lists = storeInfo.getState().default.lists;
    const noteId = storeInfo.getState().default.view.noteId;

    await request(`/jnote/delete`, {
      id: noteId,
    }, 'POST');

    let choiceTarget = null;
    lists.some(function(item, idx){
      if(item._id === noteId){
        choiceTarget = idx;
      }

      return item._id === noteId;
    });

    action.idx = choiceTarget;
  }
  else if (action.type === 'EDITNOTE') {
    const lists = storeInfo.getState().default.lists;
    const writeInfo = storeInfo.getState().default.write;
    const updateResult = await request(`/jnote/update`, {
      id: writeInfo.noteId,
      title: writeInfo.title,
      note: writeInfo.note,
      category: writeInfo.tags
    }, 'POST');

    let choiceTarget = null;
    lists.some(function(item, idx){
      if(item._id === updateResult._id){
        choiceTarget = idx;
      }

      return item._id === updateResult._id;
    });

    action.idx = choiceTarget;
    action.data = updateResult;mmmmmmmmmmmmmm
  }

  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  storeDispatch(action);
}
