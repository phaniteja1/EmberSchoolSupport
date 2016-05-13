import Ember from 'ember';

export default Ember.Component.extend({

	actions:{
		addStudent(){
			var student = {
       				name: this.get('name'),
            			course: this.get('course'),
				city: this.get('city'),
				type: this.get('type'),
				gpa: this.get('gpa'),
				imageURL: this.get('imageURL')
        		};
			
			this.sendAction('createStudent', student);
		}
	}
});
