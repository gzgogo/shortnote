
const requestRoot = '';

const httpUtil = {
  fetchNotes(successCallback, failCallback) {
    $.ajax({
      'url': requestRoot + '/notes/fetch',
      'type': 'get',
      'success': (data) => {
        if (data.errCode === 0) {
          typeof successCallback === 'function' && successCallback(data.notes);
        }
        else {
          typeof failCallback === 'function' && failCallback(data.errMsg || '加载失败，请检查您的网络连接');
        }
      },
      'error': (xhr, err, ex) => {
        //err:  "timeout", "error", "notmodified", "parsererror"
        typeof failCallback === 'function' && failCallback('加载失败，请检查您的网络连接');
      }
    });
  },

  updateNotes(notes, successCallback, failCallback) {
    $.ajax({
      url: requestRoot + '/notes/update',
      type: 'post',
      data: {
        notes: notes
      },
      'success': (data) => {
        if (data.errCode === 0) {
          typeof successCallback === 'function' && successCallback(data);
        }
        else {
          typeof failCallback === 'function' && failCallback(data.errMsg || '同步失败，请检查您的网络连接');
        }
      },
      'error': (xhr, err, ex) => {
        typeof failCallback === 'function' && failCallback('同步失败，请检查您的网络连接');
      }
    });
  },

  register(email, password, successCallback, failCallback) {
    $.ajax({
      url: requestRoot + '/register',
      type: 'post',
      data: {
        user: {
          email: email,
          password: password
        }
      },
      success: data => {
        if (data.errCode === 0) {
          typeof successCallback === 'function' && successCallback(data);
        }
        else {
          typeof failCallback === 'function' && failCallback(data.errMsg || '注册失败，服务器错误');
        }
      },
      error: (xhr, err, ex) => {
        typeof failCallback === 'function' && failCallback('注册失败，请检查您的网络连接');
      }
    })
  },

  login(email, password, successCallback, failCallback) {
    $.ajax({
      url: requestRoot + '/login',
      type: 'post',
      data: {
        user: {
          email: email,
          password: password
        }
      },
      success: data => {
        if (data.errCode === 0) {
          typeof successCallback === 'function' && successCallback(data);
        }
        else {
          typeof failCallback === 'function' && failCallback(data.errMsg || '登录失败，服务器错误');
        }
      },
      error: (xhr, err, ex) => {
        typeof failCallback === 'function' && failCallback('登录失败，请检查您的网络连接');
      }
    })
  }
};

export default httpUtil;