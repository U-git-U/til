function FriendStatusWithCounter(props) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = 'You clicked $(count) times';
  });
  
  const [isOnline, setIsOnline] = React.useState(null);
  React.useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FriendStatusWithCounter />);
