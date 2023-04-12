import React, {SyntheticEvent, useState} from "react";
import {ShopHeader} from "../Shop/ShopHeader/ShopHeader";
import LoginPageSCSS from './Login-page.module.scss'
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";


export const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        street: '',
        city: '',
        country: '',
        password: '',
        passwordCheck: '',
    });

    const [id, setId] = useState('');

    const updateForm = (key: string, value: any) => {

        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };


    const saveUser = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const res = await fetch(`${apiUrl}/user/login`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                }),
            });

            const resData = await res.json();
            setId(resData.id);

        } finally {
            setLoading(false);
            navigate('/user/login/ok', {replace: true});
        }
    };

    // @TODO dokończyć kod potwierdzający maila
    // const confirmation = async (event: SyntheticEvent) => {
    //     event.preventDefault();
    //
    //     if (form.password !== form.passwordCheck) {
    //         return window.alert('Passwords are not the same!');
    //     };
    //
    //     const res = await fetch(`${apiUrl}/user/login`, {
    //         method: 'POST',
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             ...form,
    //         }),
    //     })
    //
    //     const resData = await res.json();
    //     const result = eval(resData.code);
    //     console.log(result);
    //     await fetch(`${apiUrl}/user/login/${result}`,{
    //         method: 'POST',
    //     });
    //
    // };

    if (loading) {
        return <p>Loading...</p>
    }

    return(<>
        <ShopHeader/>
        <div className={LoginPageSCSS.container}>
            <h1>Register Form</h1>
            <form onSubmit={saveUser}>
                <p>
                    <label>
                        Name: <br/>
                        <input type="text" name="name" required maxLength={50} value={form.name} onChange={event => updateForm('name', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Surname: <br/>
                        <input type="text" name="name" required maxLength={50} value={form.surname} onChange={event => updateForm('surname', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        E-mail: <br/>
                        <input type="email" name="email" required maxLength={50} value={form.email} onChange={event => updateForm('email', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Street: <br/>
                        <input type="text" name="street" required value={form.street} onChange={event => updateForm('street', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        City: <br/>
                        <input type="text" name="city" required value={form.city} onChange={event => updateForm('city', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Country: <br/>
                        <input type="text" name="country" required value={form.country} onChange={event => updateForm('country', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Password: <br/>
                        <small>At least 6 characters.</small> <br/>
                        <input type="password" name="password" minLength={6} required value={form.password} onChange={event => updateForm('password', event.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Repeat password: <br/>
                        <input type="password" name="passwordCheck" minLength={6} required value={form.passwordCheck} onChange={event => updateForm('passwordCheck', event.target.value)}/>
                    </label>
                </p>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    </>);
}