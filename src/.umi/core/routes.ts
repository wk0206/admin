// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/onion/Desktop/admin/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/onion/Desktop/admin/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/onion/Desktop/admin/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent})],
        "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/onion/Desktop/admin/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/src/builtins/Previewer.tsx');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/onion/Desktop/admin/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/onion/Desktop/admin/node_modules/dumi-theme-default/src/layout.tsx'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/onion/Desktop/admin/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "title": "Ant Design Pro",
              "order": null
            },
            "title": "Ant Design Pro"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "path": "/user",
            "routes": [
              {
                "name": "login",
                "path": "/user/login",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/onion/Desktop/admin/src/pages/user/Login'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          }
        ]
      },
      {
        "path": "/transaction",
        "name": "我的交易",
        "icon": "SolutionOutlined",
        "routes": [
          {
            "path": "/transaction",
            "name": "我的交易",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Transaction' */'/Users/onion/Desktop/admin/src/pages/Transaction'), loading: LoadingComponent}),
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/transaction/detail",
            "name": "交易详情",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Transaction__detail' */'/Users/onion/Desktop/admin/src/pages/Transaction/detail'), loading: LoadingComponent}),
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/import",
        "name": "导入交易信息",
        "icon": "CloudUploadOutlined",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Import' */'/Users/onion/Desktop/admin/src/pages/Import'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/now",
        "name": "获取实时版权信息",
        "icon": "FieldTimeOutlined",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Now' */'/Users/onion/Desktop/admin/src/pages/Now'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/query",
        "name": "交易查询",
        "icon": "FileSearchOutlined",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Query' */'/Users/onion/Desktop/admin/src/pages/Query'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/transaction",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/onion/Desktop/admin/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
