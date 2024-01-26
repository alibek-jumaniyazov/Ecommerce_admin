import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Image, Space, Table, Typography } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import BrandModal from '../../Components/BrandPage/BrandModal';
import OpenModal from '../../Components/CategoryPage/OpenModal';

export default function BrandPage() {
  const [brand, setBrand] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getBrand = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${domain}${API_MODE}${urls.brand.getList}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setBrand(response.data.brands);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };  

  const postBrand = async (e) => {
    console.log(e);
    setLoading(true);
    try {
      const response = await axios.post(`${domain}${API_MODE}${urls.brand.post}`, e, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      console.log(response.data);
      toast.success("Brand Qo'shildi");
      setLoading(false);
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Brand Qo'shilmadi");
    }
  };

  const putBrand = async (id, e) => {
    console.log(e);
    const body = {
      e
    };
    setLoading(true);
    try {
      const response = await axios.delete(`${domain}${API_MODE}${urls.brand.put(id)}`, body, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      toast.success('Brand Muvofaqiyatli ozgartirildi!');
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Brand ozgarmadi");
      setLoading(false);

    }
  };

  const deleteBrand = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${domain}${API_MODE}${urls.brand.delete(id)}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      toast.success('Brand Muvofaqiyatli ochirildi!');
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Brand o'chirilmadi");
    }
  };

  useEffect(() => {
    getBrand();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => (
        <Image src={img} width={100} height={100} preview={false} style={{ objectFit: 'contain' }} />
      )
    },
    {
      title: "Name",
      dataIndex: "name_uz",
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
            onClick={() => putBrand(item.id)}
          />

          <Button
            icon={<i className="fa-solid fa-trash"></i>}
            onClick={() => deleteBrand(item.id)}
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
        <h1>BrandPage</h1>
        <BrandModal postBrand={postBrand} brand={brand} open={open} setOpen={setOpen} />
      </div>
      <div className="tables">
        <Table
          style={{ width: "100%" }}
          dataSource={brand}
          columns={columns}
          loading={loading}
          rowKey={"id"}
        />
      </div>
    </div>
  );
}
