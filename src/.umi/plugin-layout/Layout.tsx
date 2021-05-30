// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ApplyPluginsType, useModel  } from "umi";
import { plugin } from "../core/umiExports";
import LayoutComponent from './layout/layout/index.tsx';

export default props => {
  const [runtimeConfig, setRuntimeConfig] = useState(null);

  const initialInfo = (useModel && useModel("@@initialState")) || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  useEffect(() => {
    const useRuntimeConfig =
      plugin.applyPlugins({
        key: "layout",
        type: ApplyPluginsType.modify,
        initialValue: initialInfo
      }) || {};
    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then(config => {
        setRuntimeConfig(config);
      });
      return;
    }
    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo?.initialState]);

  const userConfig = {
    ...{'name':'ant-design-pro','theme':'PRO','locale':true,'showBreadcrumb':true,'siderWidth':208,'navTheme':'light','primaryColor':'#837CD6','layout':'mix','contentWidth':'Fluid','fixedHeader':true,'fixSiderbar':true,'colorWeak':false,'title':'区块链','headerHeight':48,'splitMenus':false,'pwa':false,'logo':'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg','iconfontUrl':''},
    ...runtimeConfig || {}
  };

  

  if(!runtimeConfig){
    return null
  }

  return React.createElement(LayoutComponent, {
    userConfig,
    
    ...props
  });
};
