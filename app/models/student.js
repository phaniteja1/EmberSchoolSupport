import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  	studentid: attr(),
	name: attr(),
  	course: attr(),
	city: attr(),
	type: attr(),
	gpa: attr(),
	image: attr()
});
