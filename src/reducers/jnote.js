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
};

export default function jnotereducer(state = initialStateList, action) {

  let new_state = {};

  switch (action.type) {

    /* scroll 체인지 */
    case 'SCROLL_CHANGE':
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
      new_state.lists[action.idx].favorite = action.favorite;

      return new_state;
    break;

    /* 프리뷰모드 체인지 */
    case 'TOGGLE_PREVIEW':
      const opened = state.preview.opened ? false : true;

      new_state = Object.assign({},state);
      new_state.preview.opened = opened;


      return new_state;
      break;

    /* 글쓰기 */
    case 'WRITENOTE':
      const dataa = action.data;
      const newArray = [dataa].concat(state.lists);

      new_state = Object.assign({},state,{
        lists: newArray,
        write: {
          title: '',
          note: '',
          tags: []
        }
      });

      return new_state;
      break;

    /* 글수정 */
    case 'EDITNOTE':
      new_state = Object.assign({}, state);
      new_state.lists[action.idx] = action.data;
      return new_state;
      break;

    /* wirte 내용을 view 내용과 상태 동기화 */
    case 'UPDATEFORM_SYNC':
      new_state = Object.assign({}, state, {
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
      new_state = Object.assign({}, state);
      new_state.lists.splice(action.idx, 1);

      state.lists = [...new_state.lists];

      return state;
      break;

    /* 글 하나 */
    case 'GETONE':
      return  Object.assign({},state,{
        view: {
          note: action.info.note,
          title: action.info.title,
          tags: action.info.category,
          noteId: action.id
        }
      });
      break;

    /* 글 리스트 */
    case 'GETLIST':

      new_state = JSON.parse(JSON.stringify(state));

      let data = {};
      if (action.searchString) {
        data.searchString = action.searchString;
      }

      new_state = Object.assign({},state,{
        lists: action.list
      });

      return new_state;
      break;

    /* 기본값 리턴 */
    default:
      return state;
      break;
  }
}

