import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import hbs from 'htmlbars-inline-precompile';

const stateToComputed = (state) => {
  return {
    jobs: state.jobs.all,
    fetching: state.jobs.fetching,
  };
};

const dispatchToActions = () => {
  return {};
};

const JobListComponent = Ember.Component.extend({
  fastboot: Ember.inject.service(),
  isFastBoot: Ember.computed.reads('fastboot.isFastBoot'),
  redux: Ember.inject.service(),

  /*
  actions: {
    firstVisibleChanged(object, index) {
      this.set('scrollPosition', index);
    }
  },
  */

  layout: hbs`
    {{yield jobs fetching}}
  `

});

export default connect(stateToComputed, dispatchToActions)(JobListComponent);