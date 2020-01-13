export const validation = (username, element, btn) => {
    const usernameRegex = /[^a-z\d-_]+/
    if(username && !usernameRegex.test(username)) {
        btn.removeAttr('disabled');
        element.removeClass('is-danger');
    } else if (!username || usernameRegex.test(username)) {
        btn.attr('disabled', true);
        element.addClass('is-danger');
    }
};