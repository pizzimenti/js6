/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {

  export var allTaskDescriptionsForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
      for(var task of taskCollection){
        if(assignee === undefined) {
          descriptions.push("not a valid user")
          return descriptions;
        }
        if(task.assignedTo === assignee) {
          console.log(assignee);
          descriptions.push(task.description);
        }
      }
      return descriptions;
  }



}
