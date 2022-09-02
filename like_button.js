'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: 0
    };
  }


  render() {
    let counter = document.querySelector('.count');
    console.log(counter.innerText);
    counter.innerText = this.state.count;
    // console.log(this.state.count);
    if (this.state.liked) {
      // return React.createElement('div', '', `liked ${this.state.count}`);
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true, count: this.state.count + 1 }) },
      'Likes '
    );
  }
}

// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));