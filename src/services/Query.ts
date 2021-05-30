import { request } from 'umi';

const list = async (params: any) => {
  return request('/admin/listGoods', {
    method: 'GET',
    params,
  });
};

const add = async (data: any) => {
  return request('/admin/postGoods', {
    method: 'POST',
    data,
  });
};

const del = async (data: any) => {
  return request('/admin/deleteGoods', {
    method: 'POST',
    data,
  });
};

export default {
  list,
  add,
  del,
};
