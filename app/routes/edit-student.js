import Ember from 'ember';

export default Ember.Route.extend({
	
	model() {
		
		// getting the data from local storage and loading it into the model to display the existing fields of the student in the view
		var currentStudent = [];
		var storedItems = JSON.parse(localStorage['currentStudent']);
      		//storedItems.forEach(function(item){
        	//	currentStudent.pushObject(item);
      		//});
		return storedItems;
	},
	actions: {

                updateStudent(){
		
			
                }

        }

});
