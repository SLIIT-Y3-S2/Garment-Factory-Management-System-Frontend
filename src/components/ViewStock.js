import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import StocksInSideNavBar from "./StocksInSideNavBar";
import AppDeleteModal from "./AppDeleteModal";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import EditStockModal from "./EditStockModal";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Link } from 'react-router-dom'

const ViewStock = () => {
  
  const [StocksView, setStocksView] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [StocksDelete, setStocksDelete] = useState();
  const [Stockdet, setStockdet] = useState();
  const [StocksCount, setStocksCount] = useState([]);
  const [StocksCount2, setStocksCount2] = useState([]);
  const [StocksCount3, setStocksCount3] = useState([]);
  const [StocksCount4, setStocksCount4] = useState([]);
  const [StocksCount5, setStocksCount5] = useState([]);
  const [StocksCount6, setStocksCount6] = useState([]);
  const [StocksCount7, setStocksCount7] = useState([]);
  const [StocksCount8, setStocksCount8] = useState([]);
  //const [stock, setStock] = useState([]);

  const columns = [
    { title: "Garment Type", field: "GarmentType" },
    { title: "Unit Price Rs.", field: "UnitPrice" },
    { title: "Quantity", field: "Quantity" },
    { title: "Received From", field: "ReceivedFrom" },
    { title: "Stored Section", field: "StoredSection" },
    { title: "Stored Bin", field: "StoredBin" },
    { title: "Date", field: "Date" },
    { title: "Time", field: "Time" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Stocks Records", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: StocksView,
    });
    doc.save("Stocks Records till " + Date() + ".pdf");
  };


  useEffect(() => {
    const getStocksView = () => {
      axios
        .get("http://localhost:5000/stockin")
        .then((res) => {
          setStocksView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    }

    const getStocksCountB = () => {
      axios
        .get("http://localhost:5000/totalstock/6315fef3997af5bc72182029")
        .then((res) => {
          setStocksCount(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTG = () => {
      axios
        .get("http://localhost:5000/totalstock/631627656073cde3af8406d0")
        .then((res) => {
          setStocksCount2(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTL = () => {
      axios
        .get("http://localhost:5000/totalstock/631627bf6073cde3af8406d1")
        .then((res) => {
          setStocksCount3(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSG = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e6da01ab7efdac54d9c8")
        .then((res) => {
          setStocksCount4(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSL = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e6ec01ab7efdac54d9ca")
        .then((res) => {
          setStocksCount5(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTSG = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e70401ab7efdac54d9cc")
        .then((res) => {
          setStocksCount6(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountTSL = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e71501ab7efdac54d9ce")
        .then((res) => {
          setStocksCount7(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    const getStocksCountSK = () => {
      axios
        .get("http://localhost:5000/totalstock/6331e73501ab7efdac54d9d0")
        .then((res) => {
          setStocksCount8(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

    getStocksView();
    getStocksCountB();
    getStocksCountTG();
    getStocksCountTL();
    getStocksCountSG();
    getStocksCountSL();
    getStocksCountTSG();
    getStocksCountTSL();
    getStocksCountSK();
  }, []);

  const filterContent = (stockin, searchTerm) => {
    const result = stockin.filter(
      (stock) =>
        stock.GarmentType.toLowerCase().includes(searchTerm) ||
        stock.UnitPrice.toLowerCase().includes(searchTerm) ||
        // stock.Quantity.toLowerCase().includes(searchTerm) ||
        stock.ReceivedFrom.toLowerCase().includes(searchTerm) ||
        stock.StoredSection.toLowerCase().includes(searchTerm) ||
        stock.StoredBin.toLowerCase().includes(searchTerm) ||
        stock.Date.toLowerCase().includes(searchTerm) ||
        stock.Time.toLowerCase().includes(searchTerm)
    );
    setStocksView(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/stockin").then((res) => {
      if (res.data) {
        filterContent(res.data, searchTerm);
      }
    });
  };

  //   const deleteClick = ({id}) => {
  //     axios
  //           .delete(`http://localhost:5000/stockin/delete/${id._id}`)
  //           .then(() => {
  //             alert("Deleted");
  //           })
  //           .catch((err) => {
  //             alert(err);
  //           });
  //   }


  return (
    <div>
      <StocksInSideNavBar />
      <div className="pageBody">
        <Carousel variant="dark" slide={false}>
          <Carousel.Item>
          
            <Card>
              <Card.Img variant="top" src="/images/TG.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount2].map((StockCount2) => (
              <Card.Footer className="text-muted">Gens Trousers --- {StockCount2.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>

          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TL.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount3].map((StockCount3) => (
              <Card.Footer className="text-muted">Ladies Trousers --- {StockCount3.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SG.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount4].map((StockCount4) => (
              <Card.Footer className="text-muted">Gens Shirts --- {StockCount4.Quantity}</Card.Footer>
              ))}              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SL.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount5].map((StockCount5) => (
              <Card.Footer className="text-muted">Ladies Shirts --- {StockCount5.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TSG.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount6].map((StockCount6) => (
              <Card.Footer className="text-muted">Gens T-Shirts --- {StockCount6.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TSL.jpeg" className="carousel1" />
              <Card.Body>
              {[StocksCount7].map((StockCount7) => (
              <Card.Footer className="text-muted">Ladies T-Shirts --- {StockCount7.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SK.png" className="carousel1" />
              <Card.Body>
              {[StocksCount8].map((StockCount8) => (
              <Card.Footer className="text-muted">Skirts --- {StockCount8.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/BL.jpg" className="carousel1" />
              <Card.Body>
              {[StocksCount].map((StockCount) => (
              <Card.Footer className="text-muted">Blouses --- {StockCount.Quantity}</Card.Footer>
              ))}
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
    
        <br />
        <br />
        <br />

        <Grid container>
          <Grid item xs={0.1} />
          <Grid
            item
            xs={11.8}
            style={{
              backgroundColor: "#63C2C7",
              height: "80px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px 0px 10px",
              boxShadow: "5px 5px 5px rgba(0,0,0,0.75)",
            }}
          >

        <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Stocks Records</h2>

        <input
              className="form-control"
              name="searchTerm"
              type="search"
              placeholder="Search"
              style={{
                width: "45%",
                height: "60px",
                borderRadius: "5px",
                border: "2px solid #174C4F",
                paddingLeft: "10px",
                marginTop: "10px",
              }}
              onChange={handleTextSearch}
            />
            <div>
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => downloadPdf()}
              >
                <BsPrinterFill />
                &nbsp;&nbsp;Stock Report
              </button>
              &nbsp;&nbsp;
            </div>
          </Grid>
          <Grid item xs={0.1} />
        </Grid>

        <br />
        <br />
        <Link to="/deletedStocks">
        <button className="btn">Deleted Records</button>
        </Link>
        <br />
        <br/>
        <br/>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Garment Type</th>
              <th>Unit Price Rs.</th>
              <th>Quantity</th>
              <th>Received From</th>
              <th>Stored Section</th>
              <th>Stored Bin</th>
              <th>Date</th>
              <th>Time</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {StocksView.map((StockView) => (
            <tbody key={StockView._id}>
              <tr>
                <td>{StockView.GarmentType}</td>
                <td>{StockView.UnitPrice}</td>
                <td>{StockView.Quantity}</td>
                <td>{StockView.ReceivedFrom}</td>
                <td>{StockView.StoredSection}</td>
                <td>{StockView.StoredBin}</td>
                <td>{StockView.Date}</td>
                <td>{StockView.Time}</td>
                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaEdit
                      onClick={() => {
                        setModalShow(true);
                        setStockdet(StockView)
                      }}
                        style={{ cursor: "pointer", color: "ORANGE" }}
                        title="Edit Record"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaRegTrashAlt
                        onClick={() => {
                          setModalDelete(true);
                          setStocksDelete(StockView);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete Record"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <EditStockModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        Stockdet={Stockdet}
        />

        <AppDeleteModal
          show={modaldelete}
          onHide={() => setModalDelete(false)}
          StocksDelete={StocksDelete}
        />
      </div>
    </div>
  );
};

export default ViewStock;
