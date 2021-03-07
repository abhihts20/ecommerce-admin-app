import React, {useEffect, useState} from 'react';
import './Category.css'
import Layout from "../../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../redux/actions";
import {Button, Modal, Row, Col} from "react-bootstrap";
import Input from "../../components/UI/Input";

const Category = () => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [categoryName,setCategoryName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getAllCategories())
    }, []);

    const renderCategories = (categoryList) => {
        let categoryArray = [];
        console.log(categoryList);
        for (let category of categoryList) {

            categoryArray.push(
                <li className={"list-group-item"} key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul className={"list-group"}>{renderCategories(category.children)}</ul>) : null}
                </li>
            )
        }
        return categoryArray;
    }

    return (
        <>
            <Layout sidebar>

                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-3xl">Category</p>
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={handleShow}>Add+</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <ul className={"list-group"}>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>

                    <Modal show={show} className="w-100 bg-transparent" size={'md'} animation={true} backdrop={false} onHide={handleClose}>
                        <Modal.Header>
                            Add New Category
                        </Modal.Header>
                        <Modal.Body>
                            <Input
                            placeholder={'Name'}
                            value={categoryName}
                            onChange={(e)=>{setCategoryName(e.target.value)}}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Row>

            </Layout>


        </>
    );
};

export default Category;
