import React from "react";
import {Form, Input, Button} from "antd";
import signInPageStyles from './SignInPage.module.scss';

export default function SignInPage() {
    return (
        <div className={signInPageStyles.pageContainer}>
            <div
                id={signInPageStyles.signInFormContainer}
            >
                <h1 className={signInPageStyles.signInHeader}>
                    Sign in
                </h1>

                <Form>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder={'Valid Email'}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder={'password'}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}