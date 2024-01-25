import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Modal, Space, Table, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import useDeleteModal from '../../Components/CategoryPage/useDeleteModal';
import toast, { Toaster } from 'react-hot-toast';
import OpenModal from '../../Components/openModal';

export default function CategoryPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [createCategory, setCreateCategory] = useState([]);
  const [edit, setEdit] = useState(null)
  const [open, setOpen] = useState(false);
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
      console.log(err);
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


  const postCategory = async (e) => {
    setLoading(true)
    const body = {
      name_uz: e.name_uz,
      name_ru: e.name_ru,
      slug: e.name_uz.toLowerCase(),
      catImage: "",
      parent_id: e.parent_id
    }

    try {
      const response = await axios.post(`${domain}${API_MODE}${urls.categories.post}`, body, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setCreateCategory(response.data);
      console.log(response.data);
      toast.success("Category Qo'shildi")
      setLoading(false)
      setOpen(false)

    } catch (err) {
      console.log(err);
      toast.error("Category Qo'shilmadi")
    }
  }


  const putCategory = async (item) => {
    console.log(item.id);
    setLoading(true)
    const body = {
      name_uz: 'e.name_uz',
      name_ru: 'e.name_ru',
      slug: 'e.name_uz'.toLowerCase(),
      catImage: "",
      parent_id: " e.parent_id"
    }

    try {
      const response = await axios.put(`${domain}${API_MODE}${urls.categories.put(item.id)}`, body, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setCreateCategory(response.data);
      console.log(response.data);
      toast.success("Category O'zgartirildi")
      setLoading(false)
      setOpen(false)
      setDrawerOpen(false)
    } catch (err) {
      console.log(err);
      toast.error("Category O'zgartirilmadi")
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

  function funcEdit(item) {
    console.log(item)
    setEdit(item)
    setDrawerOpen(true)
  }

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
            onClick={funcEdit(item)}
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
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="categoryPage__modal">
        <h1>CategoryPage</h1>
        <OpenModal postCategory={postCategory} categories={categories} open={open} setOpen={setOpen} setEdit={setEdit} edit={edit} setDrawerOpen={setDrawerOpen}/>
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
