$( ()=> {


    $("#addBurger").on("submit", function(event) {
        event.preventDefault();
        console.log("I am here");
        var newBurger = {
          name: $("#newBurger").val().trim()
        };
        console.log(newBurger);
      
        // Send the POST request
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
      
  
    
      $(".devourBurger").on("click", function(event) {
          event.preventDefault();
        var id = $(this).data("id")
        
        var newDevour = true;
        var newDevoureState = {
          devoured: newDevour
        };
    
        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevoureState
        }).then(
          function() {
            console.log("changed devour to", newDevour)
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});

