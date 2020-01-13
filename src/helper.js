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

export const convertToJson = response => {
    if (response.status === 200) {
      return response.json();
    }
};

export const create = (area, data, obj) => {
    area.append(obj(data));
};

export const formatDate = date => {
    const formatDate = new Date(date);
    return `${formatDate.toLocaleString('en-GB', {month: 'short'})} ${formatDate.getDate()}, ${formatDate.getFullYear()}`;
};