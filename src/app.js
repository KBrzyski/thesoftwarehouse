import './assets/scss/app.scss';
import $ from 'cash-dom';
import 'whatwg-fetch';
import { validation } from './helper';

const App = () => {
  const initializeApp = () => {

    //username validation
    $('.username').on('keyup', e => {
      const username = e.target.value;
      validation(username, $('.username'), $('.load-username'));
    })

    $('.load-username').on('click', () => {
      const username = $('.username').val();

    })

    const updateProfile = () => {
      $('#profile-name').text($('.username.input').val())
      $('#profile-image').attr('src', this.profile.avatar_url)
      $('#profile-url').attr('href', this.profile.html_url).text(this.profile.login)
      $('#profile-bio').text(this.profile.bio || '(no information)')
    }
  }  
  initializeApp();
}
export default App;