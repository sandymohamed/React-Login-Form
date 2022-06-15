import React, {useState} from 'react';
import './App.css'
import 'antd/dist/antd.css';
import './index.css';
import { Button, Checkbox,Form, Input, Col, Row ,Typography, Divider} from 'antd';

const { Link, Text ,Title } = Typography
const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const login= async (e) => {
         let resualt = await fetch("https://reqres.in/api/login",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              email,
              password
          })
      })
      .then(res=> res.json())
      .then(data => setMessage(data) )
      .catch(err=> setMessage(err))   
    }
  

    return (
    <section className='app'>
        <Row  xs={0}>
            <Col>
            <Title 
                level={3} 
                style={{color: '#023047', margin: '5px'}}
                >ATools.
                </Title >
            </Col>
            <Col align='right' xs={0} lg={22} style={{marginTop: '5px'}}>
            <Button 
                type="primary" 
                style={{ backgroundColor: '#023047', marginRight: '15px'}} 
            >
            Start Free Trial
            </Button>
            <Button type="primary" style={{backgroundColor: "#fb8500"}} >
            Login
            </Button>
            </Col>
        </Row>
        <Divider />
        <Row className='app-form'  >
            <Col 
                xs={24} 
                md={12} xl={12} 
                className='form-col'
            >
            <Form 
                name="basic"
                type="flex" align="middle"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={login}
                autoComplete="off"
            >
                <Form.Item>
                    <Title 
                        level={2}  
                        align="middle"
                    >
                        Welcome Back
                        </Title>
                    <Text type="secondary" >sub-title text goes here</Text>
                </Form.Item>

                <Form.Item
                    name="Email Address"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input 
                    placeholder="Email Address"
                    onChange={(e)=> setEmail(e.target.value)}  />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                    {
                    required: false,
                    message: 'Please input your password!',
                    },
                    ]}
                    >
                    <Input.Password 
                    placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)}
                 />
                </Form.Item>
                <Form.Item
                    style={{height: '100px'}}
                    wrapperCol={{
                    span: 16,
                    }}
                    >
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        block 
                        style={{  backgroundColor: '#023047'}} 
                    >
                    Login
                    </Button>

                </Form.Item>
                <Row style={{marginTop: '-70px'}}>
                    <Col 
                        xs={12} 
                        xl={6} 
                        style={{marginRight: "100px"}}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Col>

                    <Col xs={12} xl={6}>
                        <Link 
                            href="#" 
                            target="_blank"  
                            align="right"
                        >
                         forget password?
                        </Link>
                    </Col>
                </Row>
                <Divider />

                <Typography>
                   {message && <Text>{JSON.stringify(message)}</Text>}
                </Typography>
            </Form>
            </Col>
            <Col xs={0} md={12} xl={12} style={{height: '100%'}} className='img' >
            <img src={process.env.PUBLIC_URL + '/bg.png'} alt="" /> 
            </Col>
        </Row>
    </section>
  );
};

export default App;