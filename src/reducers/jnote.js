
import jQuery from 'jquery';
global.$ = jQuery;

const initialStateList = {
  lists: [],
  note: '',
}

export default function jnotereducer(state = initialStateList, action) {

  let new_state = {};

  switch (action.type) {
    /* 글쓰기 */
    case 'WRITENOTE':
      console.log('WRITENOTE---');
      console.log(action);
      break;

    /* 글수정 */
    case 'UPDATENOTE':
      break;

    /* 글 삭제 */
    case 'DELETENOTE':
      break;

    /* 글 삭제 */
    case 'DELETENOTE':
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
            note: data.note
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
