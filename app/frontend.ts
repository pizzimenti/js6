$(function() {


  var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
  console.log("Here are Thor's tasks: ");
  for(var task of thorTasks){
    console.log(task);
    $('#output').append("<p>"+task+"</p>");
  }
});
