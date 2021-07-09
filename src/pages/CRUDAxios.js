import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "antd";
import CustomForm from "../components/CustomForm";
import axios from "axios";

// async function getProductAPI
const getProductAPI = () => {
  const url = "http://localhost:5000/products";
  return axios.get(url);
};

const createProductAPI = (data) => {
  const url = "http://localhost:5000/product";
  return axios.post(url, data);
};

function CRUDAxios() {
  const [listProduct, setlistProduct] = useState([]);

  async function getProduct() {
    try {
      const result = await getProductAPI();
      if (result.status === 200) {
        const datas = result.data.map((item) => ({
          ...item,
          key: item.CustomerID,
        }));
        setlistProduct(datas);
      }
    } catch (e) {
      console.log("REQUEST CUSTOMERS ERROR: ", e);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "ProductID",
      key: "product_id",
    },
    {
      title: "Product Name",
      dataIndex: "ProductName",
      key: "product_name",
    },
    {
      title: "SupplierID",
      dataIndex: "SupplierID",
      key: "supplier_id",
    },
    {
      title: "CategoryID",
      dataIndex: "CategoryID",
      key: "category_id",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "amount",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "price",
    },
    {
      title: "Delete",
      key: "deleteAction",
      render: (text, record) => (
        <Button
          onClick={() => onDelete(record.ProductID)}
          type="primary"
          danger
        >Delete</Button>
      ),
    },
  ];

  function onDelete(id) {
    console.log("Delete by ID: ", id);
    let temp = listProduct;
    temp = temp.filter((product) => product.id !== id);
    // array slice by index
    setlistProduct([...temp]);
  }

  const _onFinish = async (values) => {
    console.log(values);
    const payload = new FormData();
    Object.keys(values).forEach((key) => {
      payload.append(key, values[key]);
    });

    try {
      const result = await createProductAPI(payload);
      if (result.status === 201) {
        getProduct();
      }
    } catch (e) {
      console.log("ERROR CREATE PRODUCT: ", e);
    }
  };

  const _onFinishFailed = (errors) => {
    console.log("Error: ", errors);
  };

  return (
    <div>
      <Row>
        <Col span={16}>
          <Table dataSource={listProduct} columns={columns} />
        </Col>
        <Col span={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*Props: onFinish và onFinishFailed của CustomForm */}
            <CustomForm onFinish={_onFinish} onFinishFailed={_onFinishFailed} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CRUDAxios;
