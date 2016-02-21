
const initialStateList = {
  number: 1
}

export default function jnotereducer(state = initialStateList, action) {
  console.log('kkjjjj');
  console.log(action.type);
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

    /* 기본값 리턴 */
    default:
      return state;
  }
  return state
}
