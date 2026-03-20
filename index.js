function handleTask() {
  let input = document.getElementById("taskInput").value;

  if(input === "") {
    alert("Please enter your task");
  } else {
    alert("Task received: " + input);
  }
}
