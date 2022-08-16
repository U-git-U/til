valueプロパティに値を指定することで変更させないようにできる

`null``undefined`は入力可


ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
