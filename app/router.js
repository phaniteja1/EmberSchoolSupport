import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('students');
  this.route('student');
  this.route('addStudent');
  this.route('editStudent',{path: '/student/:student_id'});
});

export default Router;
