import './assets/scss/app.scss';
import $ from 'cash-dom';
import 'whatwg-fetch';
import { validation, convertToJson, create} from './helper';
import api from './api';
import PullRequestEvent from './PullRequestEvent';
import PullRequestReviewCommentEvent from './PullRequestReviewCommentEvent';

const App = () => {
  //container to catch profile data
  var profileData = {
    login: null,
    avatar_url: null,
    bio: null,
    html_url: null
  };
  const initializeApp = () => { 
    //username validation
    $('.username').on('keyup', e => {
      const username = e.target.value;
      validation(username, $('.username'), $('.load-username'));
    })

    //click on load button
    $('.load-username').on('click', async () => {
      const username = $('.username').val();
      const profileLoaded = await getProfileData(username);
      if(profileLoaded) await getHistoryData(username);
    })

    //function to get profile data
    const getProfileData = async username => {
      try {
        const response = await api.getProfile(username);
        profileData = await convertToJson(response);
        updateProfile();
        return true;
      } catch (error) {
        return false;
      }      
    }

    //function to get history data
    const getHistoryData = async username => {
      const timeline = $('.timeline');
      timeline.text('');
      
      try {
        const response = await api.getHistory(username);
        const history = await convertToJson(response);
        const filteredHistory = history.filter(
          event => event.type === 'PullRequestEvent' || event.type === 'PullRequestReviewCommentEvent',
        );

        if(filteredHistory.length > 0){
          filteredHistory.forEach(event => {
            if (event.type === 'PullRequestEvent') {
              create(timeline, event, PullRequestEvent);
            } else if (event.type === 'PullRequestReviewCommentEvent') {
              create(timeline, event, PullRequestReviewCommentEvent);
            }
          });
        } else {
          timeline.text('No data to show.'); 
        }
      } catch (error) {
        timeline.text(error); 
      }
    }

    //function to update profile container
    const updateProfile = () => {
      $('#profile-name').text(profileData.login)
      $('#profile-image').attr('src', profileData.avatar_url)
      $('#profile-url').attr('href', profileData.html_url).text('@' + profileData.login)
      $('#profile-bio').text(profileData.bio || '(no information)')
    }
  }  
  initializeApp();
}
export default App;