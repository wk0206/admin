// import services from '@/services/Query';
import { Input } from 'antd';

import styles from './index.less';

const { Search } = Input;

export default () => {

  const onSearch = (value: string) => console.log(value);

  return (
    <Search placeholder="请输入要查询的交易号" onSearch={onSearch} size="large" allowClear enterButton />
  );
};
