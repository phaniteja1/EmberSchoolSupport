import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'tr',
	actions:{
		deleteStudent(student){
			this.sendAction('deleteStudent', student);
		},
		
		editStudent(student){
			// using local storage for saving the current student object
			// this must be removed with the help of services which help communication between components
			// a service is like a global event bus
			//localStorage.currentStudent = JSON.stringify(student);
			this.sendAction('editStudent',student);
		}
		
	}
});
