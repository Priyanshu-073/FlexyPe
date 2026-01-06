import { useNotification } from '../../context/NotificationContext';

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`notification-toast ${notif.type}`}
        >
          <div className="notification-content">
            <span className="notification-message">{notif.message}</span>
          </div>
          <button
            className="notification-close"
            onClick={() => removeNotification(notif.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
