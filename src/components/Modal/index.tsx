import { useToggle } from 'ahooks';
import { Modal } from 'antd';

type ModalProps = {
  width?: number;
  title?: string;
  light?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
};

export default (props: ModalProps) => {
  const { width, light, title, trigger, children, onOk, onCancel } = props;

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
        destroyOnClose={true}
        closable={!light}
        title={light ? false : title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
