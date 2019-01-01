import  React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Util from '../lib/Util';

class Scroll extends Component {
  constructor(props) {
    super(props);

    this.scrollWrap = null;
    this.scrollInner = null;
    this.ps = null;
    this.sc = null;
    this.rating = 0;
    this.op = (this.props.option)?this.props.option:{};

    this.scrollDragStandard = [];
    this.drag = false;
    this.scrollTime = null;
    this.util = new Util();

    this.isWebkit = 'WebkitAppearance' in document.documentElement.style;
  }

  componentDidMount() {

    this.scrollWrap = ReactDOM.findDOMNode(this);
    this.scrollInner = this.scrollWrap.querySelector('.jwscroll-inner');

    if (this.isWebkit !== true) {
      this.hiddenScroll();
    }
    this.addScroll();
    this.makeScrollPosition();
    this.setScrollTop();
    this.initEvent();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.realleft != this.props.realleft && this.isWebkit !== true) {
      var jwscrollWrap = this.scrollWrap;
      var jwscroll = this.scrollInner;
      jwscroll.removeAttribute("style");
      jwscrollWrap.removeAttribute("style");
      this.hiddenScroll();
    }

    if (!this.props.viewType || this.props.viewType!='preview' ) {
      return;
    }

    if (nextprops.previewScroll != this.props.previewScroll || nextprops.previewScroll==100 ) {
      let $this = ReactDOM.findDOMNode(this).querySelector('.jwscroll-inner');
      let result = (($this.scrollHeight - $this.clientHeight) * nextprops.previewScroll) / 100;
      $this.scrollTop = Number(result);
    }
  }


  hiddenScroll() {
    var jwscrollWrap = this.scrollWrap;
    var jwscroll = this.scrollInner;

    var scrollWidth = jwscroll.offsetWidth - jwscroll.clientWidth;
    var innerWidth = (jwscrollWrap.offsetWidth+scrollWidth);
    jwscroll.style.width = innerWidth+"px";
    jwscrollWrap.style.width = (innerWidth-scrollWidth)+"px";
  }

  addScroll() {
    var jwscrollWrap = this.scrollWrap;
    this.sc = document.createElement("div");
    this.ps = document.createElement("div");
    this.ps.className = "ps";
    this.sc.className = "sc";

    this.sc.appendChild(this.ps);
    jwscrollWrap.appendChild(this.sc);
  }


  makeScrollPosition() {
    var jwscroll = ReactDOM.findDOMNode(this.scrollInner);
    var ps = this.ps;
    var scrollHeight = jwscroll.scrollHeight;
    var clientHeight = jwscroll.clientHeight;
    var posHeight = parseInt(clientHeight * (clientHeight/scrollHeight));
    ps.style.height = posHeight+"px";
    if (this.op.scrollShowAlways === true) ps.style.opacity = 1;
  }

  setScrollTop() {
    var jwscroll = this.scrollInner;
    var ps = this.ps;
    var scrollHeight = jwscroll.scrollHeight;
    var clientHeight = jwscroll.clientHeight;
    this.rating = clientHeight/scrollHeight;
    var scrollTop = jwscroll.scrollTop * this.rating;
    ps.style.top = scrollTop+"px";
  }

  scrollShy() {
    var self = this;
    var ps = this.ps;
    self.util.addClass(ps, 'show');
    clearTimeout(this.scrollTime);
    self.scrollTime = setTimeout(function() {
      self.util.removeClass(ps, 'show');
    },1000);
  }

  initEvent() {

    var self = this;

    document.addEventListener('mousemove', function(evt) {
      if (self.drag) {
        var changePx = evt.screenY - self.scrollDragStandard[0];
        var changeTop = changePx / self.rating;
        var scrollTop = self.scrollDragStandard[1] + changeTop;
        self.scrollInner.scrollTop = scrollTop;
      }
    });
    self.ps.addEventListener('mousedown', function(evt) {
      self.scrollDragStandard[0] = evt.screenY;
      self.scrollDragStandard[1] = self.scrollInner.scrollTop;
      self.drag = true;
    });
    self.ps.addEventListener('mouseup', function() {
      self.drag = false;
    });
    document.addEventListener('mouseup', function() {
      self.drag = false;
    });
    self.scrollInner.addEventListener('mouseenter', function() {
      if (self.scrollInner.scrollHeight != self.scrollInner.clientHeight) {
        self.scrollShy();
      }
    });
    self.sc.addEventListener('mouseenter', function() {
      self.util.addClass(self.ps, 'show');
    });
    self.sc.addEventListener('mouseleave', function() {
      self.util.removeClass(self.ps, 'show');
    });
    self.scrollInner.addEventListener('scroll', function() {
      self.setScrollTop();
      self.scrollShy();
    });
    self.scrollInner.addEventListener('DOMSubtreeModified', function() {
      setTimeout(() => {
        self.makeScrollPosition();
        self.setScrollTop();
      },30);
    });


    window.addEventListener('resize',function() {

      if (self.isWebkit !== true) {
        var jwscrollWrap = self.scrollWrap;
        var jwscroll = self.scrollInner;
        jwscroll.removeAttribute("style");
        jwscrollWrap.removeAttribute("style");

        self.hiddenScroll();
      }
      self.makeScrollPosition();
      self.setScrollTop();
    });
  }

  render() {

    return (
      <div className='jwscroll'>
        <div className='jwscroll-inner'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      previewScroll: state.default.write.scroll
    };
})(Scroll);
