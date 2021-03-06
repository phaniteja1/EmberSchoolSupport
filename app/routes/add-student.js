import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return this.store.findAll('student');
    },

    actions: {
		createStudent(student){
			var newStudent = this.store.createRecord('student',student);
			newStudent.save();
			this.transitionTo('students');
		}
	}
});
