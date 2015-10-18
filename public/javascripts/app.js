var submit = document.getElementById("submit");
var task = document.getElementById("task");

task.focus();

function addItem(list, itemText) {
	var listItem = document.createElement("li")
	listItem.innerText = itemText;

	list.appendChild(listItem);
}

function post() {
	var itemText = task.value;

	if (!itemText || itemText === "" || itemText === " ") {
		return false;
	}

	addItem(document.getElementById("toDo"), itemText);

	task.value="";
	task.focus();
}

submit.onclick = function() {
	post();
};

task.onkeyup = function(event) {
	if (event.which == 13) {
		post();
	}
};
