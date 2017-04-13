import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model) {
    this.setHeadTags(model);
  },
  setHeadTags: function() {
    var headTags = [
      {
        type: 'meta',
        tagId: 'meta-og-title',
        attrs: {
          name: 'og:title',
          content: 'About FrontHAT',
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-title',
        attrs: {
          name: 'twitter:title',
          content: 'About FrontHAT',
        }
      },
      {
        type: 'meta',
        tagId: 'description',
        attrs: {
          name: 'description',
          content: 'Frequently asked questions about FrontHAT'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-description',
        attrs: {
          name: 'twitter:description',
          content: 'Frequently asked questions about FrontHAT'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-description',
        attrs: {
          name: 'og:description',
          content: 'Frequently asked questions about FrontHAT'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-url',
        attrs: {
          name: 'og:url',
          content: 'https://fronthat.com'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-siteName',
        attrs: {
          name: 'og:site_name',
          content: 'FrontHAT'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-site',
        attrs: {
          name: 'twitter:site',
          content: '@thefronthat'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-card',
        attrs: {
          name: 'twitter:card',
          content: 'summary'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-image',
        attrs: {
          name: 'og:image',
          content: 'https://fronthat.com/assets/images/icons/touch-icon-256x256.png',
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-image',
        attrs: {
          name: 'twitter:image',
          content: 'https://fronthat.com/assets/images/icons/touch-icon-256x256.png',
        }
      },
    ];

    this.set('headTags', headTags);
  },
});