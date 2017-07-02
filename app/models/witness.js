import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  title: DS.attr('string', {defaultValue: 'Luo Jie'}),
  fullName: Ember.computed('fName', 'email', function() {
    return this.get('fName') + ' - ' + this.get('email');
  }),
  titleName: Ember.computed('title', function () {
    return 'I am ' + this.get('title');
  })
});
