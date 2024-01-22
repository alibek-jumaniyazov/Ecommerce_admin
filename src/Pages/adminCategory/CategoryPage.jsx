import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Modal, Space, Table, Typography } from 'antd';
import { LocalizedModal } from '../../Components/category/deleteModal';

export default function CategoryPage() {

  const [categories, setCategories] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null)
  const [loading, setLoading] = useState(false)
  // const deleteModal = useDeleteModal();


  const getCategory = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${domain}${API_MODE}${urls.categories.getList}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setCategories(response.data.categories);
      setLoading(false)

    } catch (err) {
      if (err.response) {
        console.log("Serverdan kelgan xato:", err.response.data);
        console.log("HTTP status kodi:", err.response.status);
      } else if (err.request) {
        console.log("So'rovni amalga oshirishda xatolik yuz berdi:", err.request);
      } else {
        console.log("Xato yuz berdi:", err.message);
      }
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Haqiqatdan ham ochirmoqchimisiz',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'Ha',
      cancelText: "Yo'q",
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name_uz",
    },
    {
      title: "Slug",
      dataIndex: "slug",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Typography.Text type={status ? "success" : "danger"}>
          {status === 1 ? "ACTIVE" : "DEACTIVE"}
        </Typography.Text>
      ),
    },
    {
      title: "Actions",
      render: (item) => (
        <Space>
          <Button
            icon={<i className="fa-solid fa-pen"></i>}
          />

          <LocalizedModal />
          <Button
            icon={<i className="fa-solid fa-trash"></i>}
            onClick={confirm}>
          </Button>
          {contextHolder}

        </Space>
      ),
    },
  ];



  return (
    <div className='CategoryPage'>
      <div className="categoryPage__modal">
        <h1>CategoryPage</h1>

      </div>
      <Table
        style={{ width: "100%" }}
        dataSource={categories}
        columns={columns}
        loading={loading}
        rowKey={"id"}
      />

    </div>
  )
}
