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
		}
	}
});
