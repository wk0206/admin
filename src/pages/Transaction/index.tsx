import { useRef } from 'react';
import { useRequest } from 'ahooks';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@/components/ProTable';
import services from '@/services/Transaction';
import { Link } from 'umi'

type TransactionItem = {
 
};

export default () => {
  const actionRef = useRef<ActionType>();

  const list = useRequest(services.list, {
    manual: true,
  });


  const columns: ProColumns<TransactionItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '时间',
      dataIndex: 'nickname',
      valueType: 'dateTime',
    },

    {
      title: '交易号',
      dataIndex: 'nickname',
      render: (text) => [
        <Link key="detail" to="/transaction/detail">
          {text}
        </Link>
      ],
    },
  ];
  return <ProTable columns={columns} actionRef={actionRef} request={list.run} />;
};
