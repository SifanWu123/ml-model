import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox,Col,Row } from 'antd';
import axios from '../../services/http';
import moment from 'moment'
import './experiment.css'
interface experimentprops {
    msg: string;
    method: Function;
}

const ExperimentAdd: React.FC = (props: any) => {
    const [form] = Form.useForm();
    // const { getFieldDecorator } = props.form;
    const { validateFields, getFieldsValue, setFieldsValue } = form;
    const togetform = async () => {
        const values = await getFieldsValue();

        console.log(values)
    }
    const getvalue = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <div className="experiment_add_box">
            <div className="title">
                <h2>
                    Experiment
                </h2>

            </div>
            <div className="content_box">
                <Form form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={(values: any) => {
                        console.log('Success:', values);
                    }}
                >  
                    <Form.Item className="name" 
                        name="name" label="name"
                        rules={[{ required: true, message: 'Can not be empty' }]}
                    ><Input  placeholder="单行输入" />
                       
                    </Form.Item>
                    <Form.Item className="dataset_num"
                        name="dataset_num" label="dataset_num"
                        rules={[{ required: true, message: 'Can not be empty' },{pattern :new RegExp(/^[1-9]\d*$/,'g'),message:'只允许大于0的整数'}]}
                    >
                        <Input  placeholder="单行输入" />
                    </Form.Item>
                    <Form.Item className="model_num"
                        name="model_num" label="model_num"
                        rules={[{ required: true, message: 'Can not be empty' },{pattern :new RegExp(/^[1-9]\d*$/,'g'),message:'只允许大于0的整数'}]}
                    >
                        <Input  placeholder="单行输入" />
                    </Form.Item>
                    <Form.Item className="code_num"
                        name="code_num" label="code_num"
                        rules={[{ required: true, message: 'Can not be empty' },{pattern :new RegExp(/^[1-9]\d*$/,'g'),message:'只允许大于0的整数'}]}
                    >
                        <Input  placeholder="单行输入" />
                    </Form.Item>
                    <Form.Item className="model_list"
                        name="model_list" label="model_list" valuePropName="checked"
                        rules={[{ required: true, message: 'Can not be empty' }]}
                    >
                        <Checkbox.Group>
                            <Row>
                                <Col>
                                    <Checkbox value={'model1'}>model1</Checkbox>
                                </Col>
                                <Col>
                                    <Checkbox value={'model2'}>model2</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>    
                    </Form.Item>
                    <Form.Item className="dataset_list"
                        name="dataset_list" label="dataset_list" valuePropName="checked"
                        rules={[{ required: true, message: 'Can not be empty' }]}
                    >
                        <Checkbox.Group>
                            <Row>
                                <Col>
                                    <Checkbox value={'model1'}>dataset1</Checkbox>
                                </Col>
                                <Col>
                                    <Checkbox value={'model2'}>dataset2</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group> 
                    </Form.Item>
                    <Form.Item className="output_artifact_list"
                        name="output_artifact_list" label="output_artifact_list"
                        rules={[{ required: true, message: 'Can not be empty' }]}
                    >
                        <Input  placeholder="单行输入" />
                    </Form.Item>
                    <Form.Item className="desc"
                        name="desc" label="desc"
                        rules={[{ required: true, message: 'Can not be empty' }]}
                    >
                       <textarea name="desc" id="" cols={30} rows={10} ></textarea>
                    </Form.Item>
                    <Form.Item className="form_btn">
                    <Button type="primary" className="submit" onClick={togetform}>
                        submit
                    </Button>
                    <Button type="primary" className="reset" onClick={togetform}>
                        reset
                    </Button>
                    </Form.Item>
                   
                </Form>
            </div>

        </div>
    )
}
export default withRouter(React.memo(ExperimentAdd));