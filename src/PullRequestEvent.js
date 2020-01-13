import { formatDate } from './helper';

const PullRequestEvent = data => {
  const {
    actor: { avatar_url: avatarUrl = '' },
    actor: { login: userName = '' },
    actor: { url: userUrl = '' },
    created_at: date,
    payload: { action = '' },
    payload: {
      pull_request: { url: pullRequestUrl = '' },
    },
    repo: { name: repoName = '' },  
    repo: { url: repoUrl = '' }  
  } = data;

  return `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
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
              <a href="${pullRequestUrl}"></a>pull request</a>
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

export default PullRequestEvent;
