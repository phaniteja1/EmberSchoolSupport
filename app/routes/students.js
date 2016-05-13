import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('student');
		//return this.store.findRecord('student',1);
		//return {};
	},
	
	actions: {
		deleteStudent(student){
			student.destroyRecord();
			//this.transitionTo('index');
		},

		editStudent(student){
                         // using local storage for saving the current student object
                        // this must be removed with the help of services which help communication between components
                        // a service is like a global event bus
                        localStorage.currentStudent = JSON.stringify(student);
                        this.transitionTo('editStudent');
                }
	}
});
