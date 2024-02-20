const notifContainer = document.getElementById('notifContainer');

function showNotif(butten) {
  switch (butten.innerHTML) {
    case 'Success': {
      const notification = document.createElement('div');
      notification.classList.add('notification', 'success');
      let output =
        " <img src='' alt='Okey'><p></p><span style='background-color:#4caf50 ;'></span>";
      notification.innerHTML = output;
      notifContainer.appendChild(notification);
      atuoRemoveNotification(notification);
      move(notification);
      move(notification.children[2]); // span tag
      break;
    }
    case 'Error': {
      const notification = document.createElement('div');
      notification.classList.add('notification', 'error');
      let output =
        " <img src='' alt='Okey'><p></p><span style='background-color:#f44336 ;'></span>";
      notification.innerHTML = output;
      notifContainer.appendChild(notification);
      atuoRemoveNotification(notification);
      move(notification);
      move(notification.children[2]);
      break;
    }
    case 'Invalid': {
      const notification = document.createElement('div');
      notification.classList.add('notification', 'invalid');
      let output =
        " <img src='' alt='Okey'><p></p><span style='background-color:#ffeb3b ;'></span>";
      notification.innerHTML = output;
      notifContainer.appendChild(notification);
      atuoRemoveNotification(notification);
      move(notification);
      move(notification.children[2]);
      break;
    }
  }
}

function atuoRemoveNotification(notification) {
  setTimeout(function () {
    timeOutFunction(notification);
  }, 3000);
  function timeOutFunction(element) {
    element.remove();
  }
}
function move(notification) {
  setTimeout(function () {
    timeOutFunction(notification);
  }, 10);
  function timeOutFunction(element) {
    element.classList.add('move');
  }
}
