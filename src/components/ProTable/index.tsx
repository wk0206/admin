import type { ProColumns, ListToolBarProps } from '@ant-design/pro-table';
import { Table } from 'antd';
import ProTable from '@ant-design/pro-table';

type AntProTableProps = {
  headerTitle?: string;
  columns: ProColumns[];
  request: (params: any) => Promise<any>;
  actionRef?: any;
  defaultParams?: any;
  toolBarRender?: () => React.ReactNode[];
  toolbar?: ListToolBarProps;
  search?: any;
  selected?: (arg0: any) => void;
  rowSelection?: true | false;
  selectType?: 'checkbox' | 'radio';
  rowKey?: string;
};

export default (props: AntProTableProps) => {
  const {
    headerTitle,
    columns,
    defaultParams,
    request,
    actionRef,
    toolbar,
    toolBarRender,
    search,
    selected,
    rowSelection,
    selectType,
    rowKey,
  } = props;

  const rowSelectionOption = {
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
    type: selectType || 'checkbox',
    onChange: (rowKeys: any) => {
      if (selected) {
        selected(rowKeys);
      }
    },
  };

  return (
    <ProTable
      headerTitle={headerTitle || false}
      actionRef={actionRef}
      columns={columns}
      rowKey={rowKey || 'id'}
      rowSelection={rowSelection ? rowSelectionOption : false}
      request={async (params) => {
        // eslint-disable-next-line no-param-reassign
        params.pageNo = params.current;
        const res = await request({ ...params, ...defaultParams });
        return Promise.resolve({
          total: res.data.total,
          data: res.data.list,
          success: true,
        });
      }}
      search={{ ...search }}
      pagination={{
        pageSize: 10,
        showTotal: (total) => `共 ${total} 条`,
        position: ['bottomCenter'],
      }}
      tableAlertRender={false}
      toolbar={toolbar}
      toolBarRender={toolBarRender}
    />
  );
};
