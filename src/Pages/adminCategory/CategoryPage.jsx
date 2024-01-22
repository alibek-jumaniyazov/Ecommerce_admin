import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Modal, Space, Table, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import useDeleteModal from '../../Components/CategoryPage/useDeleteModal';
import toast, { Toaster } from 'react-hot-toast';

export default function CategoryPage() {

  const [categories, setCategories] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null)
  const [loading, setLoading] = useState(false)


  const getCategory = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${domain}${API_MODE}${urls.categories.getList}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setCategories(response.data.categories);
      console.log(response.data.categories);
      setLoading(false)

    } catch (err) {

    }
  }

  useEffect(() => {
    getCategory();
  }, []);


  const deleteCategory = async (id) => {
    setLoading(true)
    try {
      const response = await axios.delete(`${domain}${API_MODE}${urls.categories.delete(id)}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      toast.success('Category Muvofaqiyoatli ochirildi!')
      console.log(response.data);
      setLoading(false)
    }
    catch (err) {
      console.log(err);
      toast.error("Category o'chirilmadi")
    }
  }
  // const [modal, contextHolder] = Modal.useModal();
  // modal.confirm({
  //   title: 'Dqqat',
  //   icon: <ExclamationCircleOutlined />,
  //   content: 'Haqiqatdan ham ochirmoqchimisiz',
  //   okText: 'Ha',
  //   cancelText: "Yo'q",
  // });


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

          <Button
            icon={<i className="fa-solid fa-trash"></i>}
            onClick={() => deleteCategory(item.id)}>
          </Button>
          {/* {contextHolder} */}
        </Space>
      ),
    },
  ];



  return (
    <div className='CategoryPage'>
      <div className="categoryPage__modal">
        <h1>CategoryPage</h1>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
      <div className="tables">
        <Table
          style={{ width: "100%" }}
          dataSource={categories}
          columns={columns}
          loading={loading}
          rowKey={"id"}
        />
      </div>

    </div>
  )
}
