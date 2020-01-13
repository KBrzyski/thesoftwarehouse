import './assets/scss/app.scss';
import $ from 'cash-dom';
import 'whatwg-fetch';

const App = () => {
  const initializeApp = () => {

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