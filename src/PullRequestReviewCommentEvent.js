import { formatDate } from './helper';

const PullRequestReviewCommentEvent = data => {
  const {
    actor: { avatar_url: avatarUrl = '' },
    actor: { url: userUrl = '' },
    actor: { login: userName = '' },
    created_at: date,    
    payload: { action = '' },
    payload: {
      comment: { url: commentUrl = '' },
    },
    payload: {
      pull_request: { url: pullRequestUrl = '' },
    },    
    repo: { name: repoName = '' },
    repo: { url: repoUrl = '' }
  } = data;

  return `
    <div class="timeline-item is-primary">
      <div class="timeline-marker is-primary"></div>
      <div class="timeline-content">
        <p class="heading">${formatDate(date)}</p>
        <div class="content columns is-gapless">
          <div class="column is-narrow gh-avatar">
            <span class="gh-username">
              <img src="${avatarUrl}" />
            </span>
          </div>
          <div class="column gh-user-actions">
            <p class="is-marginless">
              <a href="${userUrl}">${userName}</a> ${action}
              <a href="${commentUrl}">comment</a>
              to
              <a href="${pullRequestUrl}">pull request</a>
            </p>
            <p class="repo-name">
              <a href="${repoUrl}">${repoName}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default PullRequestReviewCommentEvent;