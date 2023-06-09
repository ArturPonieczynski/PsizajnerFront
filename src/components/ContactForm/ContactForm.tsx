import React, {SyntheticEvent, useState} from "react";
import { apiUrl } from "../../config/api";
import ContactFormCSS from "./ContactForm.module.scss";
import {useNavigate} from "react-router-dom";

export const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        description: '',
    });

    const updateForm = (key: string, value: any) => {

        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const navigate = useNavigate();

    const sendMail = async (event: SyntheticEvent) => {
        event.preventDefault();


            try {
                await fetch(`${apiUrl}/shop/contact-form/send`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        ...form,
                    }),
                });

            } finally {
                setLoading(false);
                navigate('/contact-form/ok',{replace: true});
            }

    };

        if (loading) {
            return <p>Loading...</p>
        }


        return (<div className={ContactFormCSS.container}>
                <form onSubmit={sendMail}>
                    <h1>Contact</h1>
                    <hr/>
                    <p>
                        <label>
                            Name: <br/>
                            <input type="text" name="name" required maxLength={99} value={form.name}
                                   onChange={event => updateForm('name', event.target.value)}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Your e-mail: <br/>
                            <input type="email" name="email" required maxLength={100} value={form.email}
                                   onChange={event => updateForm('email', event.target.value)}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Description: <br/>
                            <textarea name="description" required maxLength={999} value={form.description}
                                      onChange={event => updateForm('description', event.target.value)}/>
                        </label>
                    </p>
                    <button type='submit'>SEND</button>
                </form>
            </div>
        )
    }