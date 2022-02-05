import React from "react";
import { Modal } from "antd";
import "./custom-modal.css";
const CustomModal = ({
  children,
  isVisible,
  onClose,
  size,
  onOk,
  style,
  confirmLoading,
  className,
  centered,
}) => {
  return (
    <Modal
      wrapClassName={`custome_modal ${className} `}
      visible={isVisible}
      size={size}
      confirmLoading={confirmLoading}
      onCancel={onClose}
      //   footer={null}
      style={style}
      onOk={onOk}
      centered={centered}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
