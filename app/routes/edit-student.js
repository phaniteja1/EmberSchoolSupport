import Ember from 'ember';

export default Ember.Route.extend({

    student_id:"",

	model(params) {
        this.set('student_id', params.student_id);
		return this.store.findRecord('student',params.student_id);
	},
	actions: {
        updateStudent(student){
            this.store.findRecord('student', this.get('student_id')).then(function(updatedStudent) {

                /* Has to be a better way to do this like recursively */
                updatedStudent.set('name', student.name);
                updatedStudent.set('course', student.course);
                updatedStudent.set('city', student.city);
                updatedStudent.set('enrollment', student.enrollment);
                updatedStudent.set('gpa', student.gpa);
                updatedStudent.set('imageURL', student.imageURL);
                /*  Till here i.e., assgining an object to another */
                updatedStudent.save();
            });
            this.transitionTo('students');
        }
    }
});
