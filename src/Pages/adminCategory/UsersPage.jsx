import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Image, Space, Table, Typography } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import UserModal from '../../Components/UserPage/UserModal';

export default function UsersPage() {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${domain}${API_MODE}${urls.user.getList}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setUser(response.data.users);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const postUser = async (e) => {
    const body = {
      title_uz: e.name_uz,
      name_ru: e.name_ru,
      image: e.image,
    };
    console.log(e);
    setLoading(true);
    try {
      const response = await axios.post(`${domain}${API_MODE}${urls.user.post}`, e, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      console.log(response.data);
      toast.success("User Qo'shildi");
      setLoading(false);
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("User Qo'shilmadi");
    }
  };


  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${domain}${API_MODE}${urls.user.delete(id)}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      toast.success('User Muvofaqiyatli ochirildi!');
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("User o'chirilmadi");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: user.length,
    },
    {
      title: "Name",
      dataIndex: "full_name",
    },
        {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
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
            onClick={() => deleteUser(item.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className='Page'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="Page__modal">
        <h1>UsersPage</h1>
        <UserModal postUser={postUser} user={user} open={open} setOpen={setOpen} />
      </div>
      <div className="tables">
        <Table
          style={{ width: "100%" }}
          dataSource={user}
          columns={columns}
          loading={loading}
          rowKey={"id"}
        />
      </div>
    </div>
  );
}
