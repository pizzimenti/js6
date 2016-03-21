jQuery(function() {
  jQuery("#input").submit(function(e) {
    e.preventDefault();
    var selectedPerson = jQuery("#person").val();
    console.log(selectedPerson);
    console.log(people.loki);
    var printTasks = ToDoList.allTaskDescriptionsForPerson(people[selectedPerson], tasks);
    for(var task of printTasks){
      jQuery('#output').append("<p>"+task+"</p>");
    }
  });
});
