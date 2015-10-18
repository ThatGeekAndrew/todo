var submit = document.getElementById("submit");
var task = document.getElementById("task");

task.focus();

submit.onclick = function() {
	post();
};

task.onkeyup = function(event) {
	if (event.which === 13) {
		post();
	}
};

function checkItem() {
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbId);
	if (this.checked) {
		itemText.className = "strike muted";
	} else {
		itemText.className = ""
	}
	
}

// make this work for the span with text
function editItem() {
	var newText = prompt("Edit your task here:");
	if (!newText || newText === "" || newText === " ") {
		return false;
	}
	this.innerText = newText;
}

// make this work for parent li element

function deleteItem() {
	this.style.display = "none";
}

function addItem(list, itemText) {
	var date = new Date();
	var id = "id_" + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

	var hr = document.createElement("hr");

	var listItem = document.createElement("li");
		listItem.id = id;

	var checkBox = document.createElement("input");
		checkBox.type = "checkBox",
		checkBox.id = "cb_" + id,
		checkBox.className = "pull-left",
		checkBox.onclick = checkItem;

	var listedItem = document.createElement("span");
		listedItem.innerText = itemText,
		listedItem.id = "item_" + id;

	var options = document.createElement("span");
		options.className = "pull-right";

	var editLink = document.createElement("i");
		editLink.id = "edit_" + id,
		editLink.className = "fa fa-pencil text-warning",
		editLink.onclick = editItem;

	var divider = document.createElement("span");
		divider.innerHTML = " | ";

	var delLink = document.createElement("i");
		delLink.id = "del_" + id,
		delLink.className = "fa fa-times text-danger",
		delLink.onclick = deleteItem;

	options.appendChild(editLink),
	options.appendChild(divider),
	options.appendChild(delLink);

	listItem.appendChild(hr),
	listItem.appendChild(checkBox),
	listItem.appendChild(listedItem),
	listItem.appendChild(options);

	list.appendChild(listItem);
}

function post() {
	var itemText = task.value;

	if (itemText === "" || itemText === " ") {
		return false;
	}

	addItem(document.getElementById("toDo"), itemText);

	task.value="";
	task.focus();
}
