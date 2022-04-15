import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { question } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [data, setData] = useState(question)

  //to add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question])
    notify("تم الاضافة بنجاح", "Success")
  }
  //to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length);
    setData([])
    notify("تم حذف الكل بنجاح", "Success")
  }
  //to delete one item from array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items])
    notify("تم حذف السوال بنجاح", "Success")
    if (items.length <= 0) {
      deleteAllItems();
    }
  }

  //to push notifaction 

  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-3">مسح الكل</button>) : null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
