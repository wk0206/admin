import { request } from 'umi';
import { Md5 } from 'ts-md5/dist/md5';

const login = async (data: any) => {
  // eslint-disable-next-line no-param-reassign
  data.password = Md5.hashStr(data.password);
  return request('/admin/login', {
    method: 'POST',
    data,
  });
};

const queryTopUser = async () => {
  return request('/admin/queryTopUser', {
    method: 'GET',
  });
};

const queryUserListByUId = async () => {
  return request('/admin/queryUserListByUId', {
    method: 'GET',
  });
};

export default {
  login,
  queryTopUser,
  queryUserListByUId,
};
