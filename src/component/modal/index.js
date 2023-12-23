import * as React from "react";
import { Modal } from "antd";

export default function PrimaryModal({ children, open, close, className }) {
  return (
    <>
      <Modal
        open={open}
        onCancel={close}
        onOk={close}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        classNames={className ? className : "modal p-0"}
      >
        <div className="flex flex-col pt-6 ">{children}</div>
      </Modal>
    </>
  );
}
