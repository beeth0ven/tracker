import Ember from 'ember';

export function momentFrom(params) {
  let time = window.moment(...params);
  let formatted = time.fromNow();
  return new Ember.Handlebars.SafeString(
    '<span class="text-primary">' + formatted + '</span>'
  );
}

export default Ember.Helper.helper(momentFrom);
