import jQuery from 'jquery';
global.$ = jQuery;

const initialStateList = {
  search: {
    tags: []
  },
  lists: [],
  view: {
    noteId: 0,
    title: '',
    note: '',
    tags: []
  },
  write: {
    noteId: 0,
    title: '',
    note: '',
    scroll: 0,
    tags: []
  },
  preview: {
    opened: false
  },
  dialog: {
    opened: false,
    type: 'alert',
    message: ''
  },
  shortcut: {
    buffer: null,
    admin: false
  }
}

export default function jnotereducer(state = initialStateList, action) {

  let new_state = {};

  switch (action.type) {

    /* scroll 체인지 */
    case 'SCROLL_CHANGE':
      //new_state = Object.assign({},state);
      new_state = JSON.parse(JSON.stringify(state));
    new_state.write.scroll = action.scroll;
    return new_state;

    break;

    /* 쇼트컷 체인지 */
    case 'ADMIN_CHANGE':

      new_state = Object.assign({},state);
    new_state.shortcut.admin = action.bool;

    return new_state;

    break;

    /* 쇼트컷 체인지 */
    case 'SHORTCUT_CHANGE':

      new_state = Object.assign({},state,{
      shortcut: Object.assign({},state.shortcut,{
        buffer: action.command
      })
    });

    return new_state;
    break;

    /* 다이얼로그 열기 */
    case 'OPEN_DIALOG':

      new_state = Object.assign({},state,{
      dialog: {
        opened: true,
        type: action.dialogtype,
        message: action.message,
        successaction: action.successaction,
        failAction: action.failaction
      }
    });

    return new_state;
    break;

    /* 다이얼로그 닫기 */
    case 'CLOSE_DIALOG':

      new_state = Object.assign({},state,{
      dialog: {
        opened: false,
        type: ''
      }
    });

    return new_state;

    break;

    case 'TOGGLE_FAVORITE':

      new_state = JSON.parse(JSON.stringify(state));
    let newFav = true;
    if (state.lists[action.idx].favorite) {
      newFav = false;
    }


    $.ajax({
      type: 'POST',
      async: false,
      url: '/jnote/update',
      data: {
        id: action.id,
        favorite: newFav
      },
      success: function(data) {
      }
    });

    new_state.lists[action.idx].favorite = newFav;

    return new_state;
    break;

    /* 프리뷰모드 체인지 */
    case 'TOGGLE_PREVIEW':

      let opened = true;
    if (state.preview.opened) {
      opened = false;
    }

    new_state = Object.assign({},state);
    new_state.preview.opened = opened;


    return new_state;
    break;

    /* 글쓰기 */
    case 'WRITENOTE':
      $.ajax({
      type: 'POST',
      async: false,
      url: '/jnote/create',
      data: {
        title: state.write.title,
        note: state.write.note,
        category: state.write.tags
      },
      success: function(data) {
        let newArray = [data].concat(state.lists);
        new_state = Object.assign({},state,{
          lists: newArray,
          write: {
            title: '',
            note: '',
            tags: []
          }
        });
      }
    });

    return new_state;
    break;

    /* 글수정 */
    case 'EDITNOTE':
      $.ajax({
        type: 'POST',
        async: false,
        url: '/jnote/update',
        data: {
          id: state.write.noteId,
          title: state.write.title,
          note: state.write.note,
          category: state.write.tags
        },
        success: function(data) {

          let choiceTarget = null;
          state.lists.forEach(function(item,idx){
            if(item._id == data._id){
              choiceTarget = idx;
              return;
            }
          });

          new_state = Object.assign({},state);
          new_state.lists[choiceTarget] = data;

        }
      });

      return new_state;
      break;

    /* wirte 내용을 view 내용과 상태 동기화 */
    case 'UPDATEFORM_SYNC':
      new_state = Object.assign({},state,{
      write: {
        noteId: state.view.noteId,
        title: state.view.title,
        note: state.view.note,
        tags: state.view.tags
      }
    });
    return new_state;
    break;

    /* 타이틀 폼수정 */
    case 'UPDATEFORM_TITLE':
      new_state = Object.assign({},state);
    new_state.write.title = action.text;

    return new_state;
    break;

    /* 컨텐츠 폼수정 */
    case 'UPDATEFORM_NOTE':
      new_state = Object.assign({},state);
    new_state.write.note = action.text;

    return new_state;
    break;

    /* 컨텐츠 폼수정 */
    case 'UPDATEFORM_TAGS':
      new_state = Object.assign({},state);
    new_state.write.tags = action.text;

    return new_state;
    break;



    /* 글 삭제 */
    case 'DELETENOTE':

      $.ajax({
      type: 'POST',
      async: false,
      url: '/jnote/delete',
      data: {
        id: state.view.noteId
      },
      success: function(data) {

        let choiceTarget = null;
        state.lists.forEach(function(item,idx){
          if(item._id == state.view.noteId){
            choiceTarget = idx;
            return;
          }
        });

        new_state = Object.assign({},state);
        new_state.lists.splice(choiceTarget, 1);
      }
    });
    return new_state;
    break;

    /* 글 하나 */
    case 'GETONE':
      $.ajax({
      type: 'GET',
      async: false,
      url: '/jnote/read/' + action.id,
      success: function(data) {
        new_state = Object.assign({},state,{
          view: {
            note: data.note,
            title: data.title,
            tags: data.category,
            noteId: action.id
          }
        });
      }
    });
    return new_state;
    break;

    /* 글 리스트 */
    case 'GETLIST':

      let data = {};
    if (action.searchString) {
      data.searchString = action.searchString;
    }

    $.ajax({
      type: 'GET',
      async: false,
      url: '/jnote/read',
      data: data,
      success: function(data) {
        new_state = Object.assign({},state,{
          lists: data
        });
      }
    });
    return new_state;
    break;

    /* 기본값 리턴 */
    default:
      return state;
    break;
  }
}

