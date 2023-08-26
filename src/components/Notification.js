import React from 'react'

const Notification = ({ showing } ) => {
  return (
    <div className={showing ? "notification-container show" : "notification-container"}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification