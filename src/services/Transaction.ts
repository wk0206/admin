import { request } from 'umi';

const list = async (params: any) => {
  return request('/admin/listUserForPage', {
    method: 'GET',
    params,
  });
};

const rechargePoints = async (params: any) => {
  return request('/admin/rechargePoints', {
    method: 'GET',
    params,
  });
};

const upgradeUserToTop = async (params: any) => {
  return request('/admin/upgradeUserToTop', {
    method: 'GET',
    params,
  });
};

const listUserBill = async (params: any) => {
  return request('/admin/listUserBill', {
    method: 'GET',
    params,
  });
};

const greenChannel = async (data: any) => {
  return request('/admin/greenChannel', {
    method: 'POST',
    data,
  });
};

export default {
  list,
  rechargePoints,
  upgradeUserToTop,
  listUserBill,
  greenChannel,
};
