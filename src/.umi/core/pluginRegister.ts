// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/onion/Desktop/admin/src/app.tsx';
import * as Plugin_1 from '/Users/onion/Desktop/admin/node_modules/umi-plugin-antd-icon-config/lib/app.js';
import * as Plugin_2 from '/Users/onion/Desktop/admin/src/.umi/plugin-access/rootContainer.ts';
import * as Plugin_3 from '../plugin-initial-state/runtime';
import * as Plugin_4 from '@@/plugin-layout/runtime.tsx';
import * as Plugin_5 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/onion/Desktop/admin/src/app.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '/Users/onion/Desktop/admin/node_modules/umi-plugin-antd-icon-config/lib/app.js',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/Users/onion/Desktop/admin/src/.umi/plugin-access/rootContainer.ts',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_4,
    path: '@@/plugin-layout/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_5,
    path: '../plugin-model/runtime',
  });
