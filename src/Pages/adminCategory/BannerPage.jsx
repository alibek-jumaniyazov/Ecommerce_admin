import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_MODE, domain, urls } from '../../routes/url';
import { Button, Image, Space, Table, Typography } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import BannerModal from '../../Components/BannerPage/BannerModal';

export default function BannerPage() {
    const [banner, setBanner] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const getBanner = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${domain}${API_MODE}${urls.banner.getList}`, {
                headers: {
                    Authorization: `Bearer ${urls.token}`
                }
            });
            setBanner(response.data.events);
            console.log(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const postBanner = async (e) => {
        const body = {
            title_uz: e.name_uz,
            name_ru: e.name_ru,
            image: e.image,
            image: e.image,
            image: e.image,     

        };
        console.log(e);
        setLoading(true);
        try {
            const response = await axios.post(`${domain}${API_MODE}${urls.banner.post}`, e, {
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


    const deleteBanner = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${domain}${API_MODE}${urls.banner.delete(id)}`, {
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
            setLoading(false);
        }
    };

    useEffect(() => {
        getBanner();
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
            dataIndex: "title_uz",
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
                    // onClick={() => putBrand(item.id)}
                    />

                    <Button
                        icon={<i className="fa-solid fa-trash"></i>}
                        onClick={() => deleteBanner(item.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className='BrandPage'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="categoryPage__modal">
                <h1>BannerPage</h1>
                <BannerModal postBanner={postBanner} banner={banner} open={open} setOpen={setOpen} />
            </div>
            <div className="tables">
                <Table
                    style={{ width: "100%" }}
                    dataSource={banner}
                    columns={columns}
                    loading={loading}
                    rowKey={"id"}
                />
            </div>
        </div>
    );
}
