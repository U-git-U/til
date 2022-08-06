const root = ReactDOM.createRoot(document.getElementById('root'));

const startTime = new Date();
let h = startTime.getHours();
let m = startTime.getMinutes();
let s = startTime.getSeconds();

function tick() {
  
  const date = new Date();
  // s = date.getSeconds();
  // if (m !== date.getMinutes()) m = date.getMinutes();
  // if (h !== date.getHours()) h = date.getHours();
  // const clock_2 = <div><span>{h}h </span><span>{m}m </span><span>{s}s</span></div>;
  const clock_2 = <div><span>{date.getHours()}h </span><span>{date.getMinutes()}m </span><span>{date.getSeconds()}s</span></div>;
  // console.log(h+"h "+m+"m "+s+"s");
  
  
  const element = (
  <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      
      {clock_2}
  </div>
  );

  root.render(element);
}

setInterval(tick, 1000);
