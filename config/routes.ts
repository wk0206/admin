export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/transaction',
    name: '我的交易',
    icon: 'SolutionOutlined',
    routes: [
      {
        path: '/transaction',
        name: '我的交易',
        component: './Transaction',
        hideInMenu: true,
      },
      {
        path: '/transaction/detail',
        name: '交易详情',
        component: './Transaction/detail',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/import',
    name: '导入交易信息',
    icon: 'CloudUploadOutlined',
    component: './Import',
  },
  {
    path: '/now',
    name: '获取实时版权信息',
    icon: 'FieldTimeOutlined',
    component: './Now',
  },
  {
    path: '/query',
    name: '交易查询',
    icon: 'FileSearchOutlined',
    component: './Query',
  }, 
  {
    path: '/',
    redirect: '/transaction',
  },
  {
    component: './404',
  },
];
