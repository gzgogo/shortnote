
const requestRoot = '';

const httpUtil = {
  fetchNotes(successCallback, failCallback) {
    $.ajax({
      'url': requestRoot + '/notes',
      'type': 'get',
      'success': (data) => {
        if (data.errCode === 0) {
          typeof successCallback === 'function' && successCallback(data);
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
      'url': requestRoot + '/notes',
      'type': 'post',
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
  }
};

export default httpUtil;