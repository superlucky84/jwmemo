
export default class Util {

  constructor() {

  }
  addClass(target, addClass) {
    let className = target.className;
    if (!new RegExp(addClass, 'g').exec(className)) {
      className += " "+addClass;
      target.className = className;
    }
  }

  removeClass(target, removeClass) {
    let className = target.className;
    if (new RegExp(removeClass, 'g').exec(className)) {
      var regex = new RegExp(' '+removeClass, 'g');
      className = className.replace(regex, '');
      target.className = className;
    }
  }

}
