import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Image, Space, Table, Typography } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import ProductModal from '../../Components/ProductPage/ProductModal';


export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${domain}${API_MODE}${urls.product.getList}`, {
        headers: {
          Authorization: `Bearer ${urls.token}`
        }
      });
      setProduct(response.data.products);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const postProduct = async () => {
    const body = {
      title_uz: e.name_uz,
      name_ru: e.name_ru,
      image: e.image,
    };
    console.log(e);
    setLoading(true);
    try {
      const response = await axios.post(`${domain}${API_MODE}${urls.product.post}`, body, {
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


  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${domain}${API_MODE}${urls.product.delete(id)}`, {
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
    getProduct();
  }, []);

  const columns = [
    // {
    //   title: "id",
    //   dataIndex: user.length,
    // },
    {
      title: "Name",
      dataIndex: "name_uz",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => (
        <Image src={img} width={100} height={100} preview={false} style={{ objectFit: 'contain' }} />
      )
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
            onClick={() => deleteProduct(item.id)}
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
        <h1>ProductPage</h1>
        <ProductModal postProduct={postProduct} open={open} setOpen={setOpen} />
      </div>
      <div className="tables">
        <Table
          style={{ width: "100%" }}
          dataSource={product}
          columns={columns}
          loading={loading}
          pagination={
            {
              total: 25
            }
          }
          rowKey={"id"}
        />
      </div>
    </div>
  );
}
