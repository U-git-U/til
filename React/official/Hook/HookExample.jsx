// １つのコンポーネント内で複数のstateを利用可能
// import React, { useState } from 'react';

function Example() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = 'You clicked ${count} times';
  });
  console.log(count);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me®
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
