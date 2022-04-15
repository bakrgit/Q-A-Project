import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
import { question } from '../data'
const QAList = ({ data, deleteOneItem }) => {

    const dataLocal = JSON.parse(localStorage.getItem("items"))
    //to delete one item from array
    const onDeleteItem = (ID) => {
        if (localStorage.getItem("items") != null) {
            const index = question.findIndex((item) => item.id === ID);
            question.splice(index, 1)
            deleteOneItem(question);
        }
    }

    return (
        <Row>
            <Accordion>
                {
                    localStorage.getItem("items") != null ? (dataLocal.map((item, index) => {
                        return (<Accordion.Item key={index} eventKey={item.id}>
                            <Accordion.Header>
                                <div className="m-auto">{item.q}</div>

                            </Accordion.Header>
                            <Accordion.Body className="text-end">
                                <div className="px-3 d-inline ">{item.a}</div>
                                <button onClick={() => onDeleteItem(item.id)} className="btn-color">مسح  </button>
                            </Accordion.Body>
                        </Accordion.Item>)

                    })) : <h2 className="fs-4 text-center p-5">لا يوجد اسئله الان</h2>
                }


            </Accordion>
        </Row>
    )
}

export default QAList
