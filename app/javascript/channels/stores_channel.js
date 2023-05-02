import consumer from "./consumer"

function checkOverallStatus(data) {
	let totalDevices = Object.keys(data.devices).length;
	const statusesCount = {
		ok: 0,
		error: 0
	}

	for(let device in data.devices) {
		statusesCount[data.devices[device]]++;
	}

	if(statusesCount['ok'] === totalDevices) return 'ok';
	if(statusesCount['error'] === totalDevices) return 'error';
	if(totalDevices > statusesCount['ok'] && statusesCount['ok'] > 0) return 'warning';
	if(totalDevices > statusesCount['error'] && statusesCount['error'] > 0) return 'warning';
}


consumer.subscriptions.create("StoresChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const translations = {
      'webserver': 'Web Server',
      'dbserver': 'Database Server',
      'printer': 'Printer'
    }
    const classes = {
      'ok': 'list-group-item list-group-item-success',
      'error': 'list-group-item list-group-item-danger',
      'warning': 'list-group-item list-group-item-warning'
    }
    if (!data){
      return
    }

    let store = document.getElementById(data.store_id);
    let storeStatus = document.getElementById(`store_status_${data.id}`);
    let updateAt = document.getElementById(`updated_at_${data.id}`);
    store.innerHTML = `Store name: ${data.store_id}`;
    updateAt.innerHTML = `Updated at: ${data.time}`;

    storeStatus.className = "";
    let opStoreStatus = checkOverallStatus(data);
    storeStatus.className = classes[opStoreStatus];
    storeStatus.innerHTML = `Store status: ${opStoreStatus}`;
    for(let dev of Object.keys(data.devices)) {
      let device = document.querySelector(`#${dev}_${data.id}`);
      device.innerHTML = `${translations[dev]}: ${data.devices[dev]}`;
        device.className = "";
        device.className = classes[data.devices[dev]];
    }
  }
});
