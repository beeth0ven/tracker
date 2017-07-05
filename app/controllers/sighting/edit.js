import Ember from 'ember';

export default Ember.Controller.extend({
  sighting: Ember.computed.alias('model.sighting'),
  actions: {
    update() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting').save().then(() => {
          this.transitionToRoute('sightings');
        });
      }
    },
    cancel() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting').rollbackAttribute();
      }
      this.transitionToRoute('sightings');
    },
    delete() {
      let self = this;
      if (window.confirm("Are you sure you want to delete this sighting?")) {
        this.get('sighting').destroyRecord().then(() => {
          self.transitionToRoute('sightings');
        });
      }
    }
  }
});
