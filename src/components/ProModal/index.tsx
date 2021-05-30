import { useToggle } from 'ahooks';
import { Modal } from 'antd';

type AntModalProps = {
  width?: number;
  title?: string;
  light?: boolean;
  setVisible?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  footer?: React.ReactNode;
  hasNoPadding?: boolean;
};

export default (props: AntModalProps) => {
  const {
    width,
    light,
    title,
    trigger,
    children,
    setVisible,
    onOk,
    onCancel,
    footer,
    hasNoPadding,
  } = props;

  const [visible, { toggle }] = useToggle(false);

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
    toggle(false);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    toggle(false);
  };

  return (
    <>
      <div onClick={() => toggle(true)}>{trigger}</div>
      <Modal
        width={width}
        bodyStyle={{ padding: light || hasNoPadding ? '0px' : '24px' }}
        destroyOnClose={true}
        closable={!light}
        title={light ? false : title}
        visible={setVisible !== undefined ? setVisible : visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};
