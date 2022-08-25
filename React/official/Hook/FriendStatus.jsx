function  FriendStatus(props) {
  const [isOnline, setIsOnline] = React.useState(null);
  
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  
  React.useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  
  if (isOnline === null) {
    return 'loading';
  }
  return isOnline ? 'Online' : 'Offline';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FriendStatus />);
