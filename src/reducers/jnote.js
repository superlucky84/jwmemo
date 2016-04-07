import jQuery from 'jquery';
global.$ = jQuery;

const initialStateList = {
  lists: [],
  view: {
    noteId: 0,
    note: ''
  },
  write: {
    title: '',
    note: ''
  }
}

export default function jnotereducer(state = initialStateList, action) {

  let new_state = {};

  switch (action.type) {

    /* 글쓰기 */
    case 'WRITENOTE':
      $.ajax({
        type: 'POST',
        async: false,
        url: '/jnote/create',
        data: {
          title: state.write.title,
          note: state.write.note
        },
        success: function(data) {
          let newArray = [data].concat(state.lists);
          new_state = Object.assign({},state,{
            lists: newArray,
            write: {
              title: '',
              note: ''
            }
          });
        }
      });


      return new_state;
      break;

    /* 타이틀 폼수정 */
    case 'UPDATEFORM_TITLE':
      new_state = Object.assign({},state,{
        write: {
          title: action.text,
          note: state.write.note
        }
      });
      return new_state;
      break;

    /* 컨텐츠 폼수정 */
    case 'UPDATEFORM_NOTE':
      new_state = Object.assign({},state,{
        write: {
          title: state.write.title,
          note: action.text
        }
      });
      return new_state;
      break;

    /* 글수정 */
    case 'UPDATENOTE':
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

          console.log('REMOVERESULT',data);

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
          console.log('GETONE');
          console.log(data);
          new_state = Object.assign({},state,{
            view: {
              note: data.note,
              noteId: action.id
            }
          });
        }
      });
      return new_state;
      break;

    /* 글 리스트 */
    case 'GETLIST':

      $.ajax({
        type: 'GET',
        async: false,
        url: '/jnote/read',
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

