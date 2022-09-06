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

const ViewStock = () => {
  const [StocksView, setStocksView] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [StocksDelete, setStocksDelete] = useState();
  const [Stockdet, setStockdet] = useState();
  const [StocksCount, setStocksCount] = useState([]);

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
    getStocksView();
  }, []);

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
              {/* {StocksCount.map((StockCount) => ( */}
              <Card.Footer className="text-muted"></Card.Footer>
              {/* ))} */}
              </Card.Body>
            </Card>

          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TL.jpg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SG.jpg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">3 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SL.jpg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">4 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TSG.jpg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">4 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/TSL.jpeg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">4 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/SK.png" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">4 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card>
              <Card.Img variant="top" src="/images/BL.jpg" className="carousel1" />
              <Card.Body>
              <Card.Footer className="text-muted">4 days ago</Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Garment Type</th>
              <th>Unit Price</th>
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
