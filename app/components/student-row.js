import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'tr',
	actions:{
		showName(student){
			this.sendAction('deleteStudent', student);
		}
		
	}
});
