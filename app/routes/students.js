import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('student');
		//return this.store.findRecord('student',1);
		//return {};
	},

	actions: {
		deleteStudent(student){
			console.log(student.id);
			student.destroyRecord();
			//this.transitionTo('index');
		},

		editStudent(student){

            this.transitionTo('editStudent',student.id);
        }
	}
});
