import jQuery from 'jquery';
global.$ = jQuery;

const initialStateList = {
  lists: [],
  view: {
    noteId: 0,
    title: '',
    note: ''
  },
  write: {
    noteId: 0,
    title: '',
    note: ''
  },
  preview: {
    opened: false
  }
}

export default function jnotereducer(state = initialStateList, action) {

  let new_state = {};

  switch (action.type) {

    /* 글쓰기 */
    case 'TOGGLE_PREVIEW':

      let opened = true;
      if (state.preview.opened) {
        opened = false;
      }
      console.log('TOGGLE_PREVIEW!!!', opened);

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

    /* 글수정 */
    case 'EDITNOTE':

      $.ajax({
        type: 'POST',
        async: false,
        url: '/jnote/update',
        data: {
          id: state.write.noteId,
          title: state.write.title,
          note: state.write.note
        },
        success: function(data) {

          let choiceTarget = null;
          state.lists.forEach(function(item,idx){
            if(item._id == data._id){
              choiceTarget = idx;
              return;
            }
          });

          console.log('choiceTarget',choiceTarget);


          new_state = Object.assign({},state);

          new_state.lists[choiceTarget] = data;

          console.log('jjLIST',data,new_state.lists);

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
          note: state.view.note
        }
      });
      return new_state;
      break;

    /* 타이틀 폼수정 */
    case 'UPDATEFORM_TITLE':
      new_state = Object.assign({},state,{
        write: {
          noteId: state.write.noteId,
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
          noteId: state.write.noteId,
          title: state.write.title,
          note: action.text
        }
      });
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
              title: data.title,
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

