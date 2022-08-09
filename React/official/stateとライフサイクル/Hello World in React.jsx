class Toggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.style = this.getStyle();
    this.state = {
      isToggleOn: true,
      count: 0,
      
      // style : {
      //   color: "unset",
      //   background: "white",
      //   border: "2px solid #333",
      //   bodyColor: "#eee",
      // }
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.getStyle = this.getStyle.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      count: prevState.count + 1,
      // style: {
      // color: prevState.isToggleOn ? "white" : "unset",
      // background: prevState.isToggleOn ? "black" : "white",
      // border: prevState.isToggleOn ? "4px solid #ddd": "2px solid #333",
      // bodyColor: prevState.isToggleOn ? "#111" : "#eee"
      // }
    }));
    this.style = this.getStyle(this.state.isToggleOn);
  }

  render() {
    // console.log(this.style);
    const body = document.body;
    body.style.backgroundColor = this.style.bodyColor;
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={this.style}>
          {this.state.isToggleOn ? 'O N' : 'OFF'}
        </button>
        <p style={{color: this.style.countColor}}>count: {this.state.count} </p>
      </div>
    );
  }
  
  getStyle(toggle) {
    let style =　{
      bodyColor: '#111',
      
      color: '#333',
      background: '#ccc',
      border: '2px solid #eee',
      borderRadius: '3px',
      countColor: '#bbb'
     };
    
    if (toggle) {
      style =　{
        bodyColor: '#ccc',
        
        color: '#ddd',
        background: '#333',
        border: '3px solid #222',
        borderRadius: '3px',
        countColor: '#333'
      };
    }
    return style;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);
