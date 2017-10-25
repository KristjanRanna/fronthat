import Component from '@ember/component';
import ScrollToTop from '../../mixins/scroll-to-top';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend(ScrollToTop, {
  classNames: ['job-details', 'fadeIn'],
  tagName: 'job-posting',
  itemscope: '',
  itemtype: 'http://schema.org/JobPosting',
  attributeBindings: ['itemscope', 'itemtype'],

  layout: hbs`
    <div class="job-details-main-toolbar-title">
      <h1 itemprop="title">{{job.attributes.title}}</h1>
    </div>
    <div class="job-details-secondary-toolbar">
      <div class="job-company" itemprop="hiringOrganization" itemscope itemtype="http://schema.org/Organization">
        <h2 itemprop="name">{{job.attributes.company}}</h2>
      </div>
      <time class="job-date" itemprop="datePosted">{{job.attributes.prettydate}}</time>
    </div>
    <div class="job-details-content" itemprop="description">
      {{{job.attributes.description}}}
    </div>
    {{subscribe-area}}
    <div class="job-details-main-toolbar">
      {{#link-to job.attributes.category class="nav-button view-similar-link"}}
        View Similar
      {{/link-to}}
      <a href={{job.attributes.url}} target="_blank" class="nav-button" itemprop="url">
        Apply
      </a>
    </div>
    <form action="https://www.getdrip.com/forms/64302472/submissions" method="post">
      <div class="subscribe-share-report-area-container">
        <div class="subscribe-share-report-area">
          <h4 class="subscribe-header">Be the first one to see similar job postings</h4>
          <label class="subscribe-label" for="fields[email]">Email:</label>
          <input class="email-input" type="email" placeholder="my@email.com" name="fields[email]" id="fields[email]" value="" />
          <input class="nav-button subscribe-button" type="submit" name="submit" value="Subscribe" />
         </div>
          <div class="subscribe-share-report-area social-share">
          <h4 class="subscribe-header">Share this job posting</h4>
            {{twitter-share count='none'}}
            {{linkedin-share}}
            {{#email-share}}
            {{fa-icon "envelope"}} Email a friend
            {{/email-share}}
        <p>
       Not a remote job? <a href="mailto:the@fronthat.com" rel="noopener noreferrer" target="_blank"> Please let us know!</a>
        </p>
         </div>
      </div>
    </form>
  `
});
