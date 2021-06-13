import React from 'react';

const Notification = ({ message, type = 'success' }) => {
  const errorStyle = { color: 'red' };
  const successStyle = { color: 'green' };
  const notificationStyle = {
    backgroundColor: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  const style =
    type === 'success'
      ? { ...notificationStyle, ...successStyle }
      : { ...notificationStyle, ...errorStyle };

  if (message === null) {
    return null;
  }

  return <div style={style}>{message}</div>;
};

export default Notification;
