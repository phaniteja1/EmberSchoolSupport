//import Model from 'ember-data/model';
//import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  	studentid: DS.attr('string'),
	name: DS.attr('string'),
  	course: DS.attr('string'),
	city: DS.attr('string'),
	type: DS.attr('string'),
	gpa: DS.attr('string'),
	image: DS.attr('string')
});
