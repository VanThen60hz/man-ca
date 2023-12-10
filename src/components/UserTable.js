import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import "./UserTable.css";

const UserTable = ({ userData }) => {
  const [initialUserData, setInitialUserData] = useState(userData);
  const [sortedInfo, setSortedInfo] = useState(null);
  const [visibleRows, setVisibleRows] = useState(userData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm(); // Use Form hooks to access form methods

  const handleSort = (columnKey) => {
    setSortedInfo((prevSortedInfo) => {
      const currentColumnKey = prevSortedInfo?.columnKey;
      const currentOrder = prevSortedInfo?.order;

      return {
        columnKey,
        order:
          currentColumnKey === columnKey && currentOrder === "ascend"
            ? "descend"
            : "ascend",
      };
    });
  };

  const handleChangeSelect = (value) => {
    if (value === "all") {
      setVisibleRows(initialUserData);
    } else if (value === "3") {
      setVisibleRows(initialUserData.slice(0, 3));
    } else if (value === "5") {
      setVisibleRows(initialUserData.slice(0, 5));
    }
  };

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
    form.setFieldsValue(record); // Set form fields based on the selected record
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const updatedUserData = initialUserData.map((user) =>
        user.id === selectedRecord.id ? { ...user, ...values } : user
      );

      setInitialUserData(updatedUserData);

      console.log("Updated User Data:", updatedUserData);

      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo?.columnKey === "name" && sortedInfo.order,
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
      key: "dob",
      sorter: (a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        return dateA - dateB;
      },
      sortOrder: sortedInfo?.columnKey === "dob" && sortedInfo.order,
    },
    {
      title: "SDT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "edit",
      key: "edit",
      render: (_text, record) => (
        <Button onClick={() => showModal(record)}>Chỉnh sửa</Button>
      ),
    },
  ];

  return (
    <>
      <Table
        className="user-table"
        dataSource={visibleRows}
        columns={columns}
        rowKey={(record) => record.id}
        onChange={(_pagination, _filters, sorter) => setSortedInfo(sorter)}
        pagination={false}
        bordered
      />
      <div className="table-actions">
        <Button onClick={() => handleSort("name")}>Sắp xếp theo tên</Button>
        <Button onClick={() => handleSort("dob")}>Sắp xếp theo năm sinh</Button>

        <Select
          defaultValue="Tất cả"
          onChange={handleChangeSelect}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "3", label: "3 hàng" },
            { value: "5", label: "5 hàng" },
          ]}
        />

        <Modal
          title="Chỉnh sửa người dùng"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Lưu"
          cancelText="Hủy"
          style={{ textAlign: "center" }}
        >
          <Form
            form={form}
            initialValues={selectedRecord}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item label="Họ tên" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Ngày sinh" name="dob">
              <Input />
            </Form.Item>
            <Form.Item label="SDT" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Vai trò" name="role">
              <Select style={{ width: "40%" }}>
                <Select.Option value="Guest">Guest</Select.Option>
                <Select.Option value="User">User</Select.Option>
                <Select.Option value="Admin">Admin</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default UserTable;
