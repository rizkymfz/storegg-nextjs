import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setLogin } from '../../../services/auth';
import Cookies from 'js-cookie';

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const onSubmit = async () => {
        const data = { email, password }
        if (!email || !password) {
            toast.error('email and password field is required!')
        } else {
            const response = await setLogin(data)
            if (response.error == true) {
                toast.error(response.message)
            } else {
                toast('Login success')
                const { token } = response.data
                const base64Token = btoa(token) // beauty to ugly 
                Cookies.set('token', base64Token, { expires: 1 })
                router.push('/')
            }
        }
    }
    return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
            <div className="pt-50">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="pt-30">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                <input
                    type="password"
                    className="form-control rounded-pill text-lg"
                    aria-describedby="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                    type='button'
                    className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                    onClick={onSubmit}
                >
                    Continue to Sign In
                </button>
                <Link href="/auth/sign-up">
                    <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                        role="button">Sign Up
                    </a>
                </Link>
            </div>
        </>
    )
}
