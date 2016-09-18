// import request from 'superagent';
const request = window.superagent;
const requestRoot = '';

const httpUtil = {
  fetchNotes() {
    request
      .get(requestRoot + '/notes')
      .end(function (response) {
        if (response.statusCode == 200) {
          var json = response.json();
          typeof successCallback === 'function' && successCallback(json);
        }
        else {
          typeof failCallback === 'function' && failCallback(json.errMsg || '加载失败，请刷新重新加载');
        }
      })
      .on('error', function () {
        typeof failCallback === 'function' && failCallback(json.errMsg || '加载失败，请刷新重新加载');
      });
  },

  updateNotes(notes, successCallback, failCallback) {
    request
      .post(requestRoot + '/notes')
      .end(function (response) {
        if (response.statusCode == 200) {
          var json = response.json();
          typeof successCallback === 'function' && successCallback(json);
        }
        else {
          typeof failCallback === 'function' && failCallback(json.errMsg || '同步失败，请稍后再试');
        }
      })
      .on('error', function () {
        typeof failCallback === 'function' && failCallback('同步失败，请稍后再试');
      });
  },
  
  register(email, password) {
    var salt = crypto.randomBytes(16).toString('hex');
    console.log('salt: ' + salt);

    // var sha1 = crypto.createHash('sha1');
    // sha1.update(user.pass).update(user.salt);
    //
    // user.pass = sha1.digest('hex');
  }
};

export default httpUtil;