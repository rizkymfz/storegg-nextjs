import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { setSignUp } from '../../services/auth'
import { getGameCategory } from '../../services/player'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function SignUpPhoto() {

    const [categories, setCategories] = useState([])
    const [favorite, setFavorite] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('/icon/upload.svg')
    const [localForm, setLocalForm] = useState({
        name: '',
        email: ''
    })
    const router = useRouter()

    const getCategory = useCallback(async () => {
        const data = await getGameCategory()

        setCategories(data)
        setFavorite(data[0]._id)
    }, [getGameCategory])

    useEffect(() =>{
        getCategory()
    }, [])

    useEffect(() => {
      const getLocalForm = localStorage.getItem('user-form')
      setLocalForm(JSON.parse(getLocalForm!))
    }, [])
    

    const onSubmit = async () => {
        const getLocalForm = await localStorage.getItem('user-form')
        const userForm = JSON.parse(getLocalForm!)
        const formData = new FormData()

        formData.append('image', image)
        formData.append('name', userForm.name)
        formData.append('email', userForm.email)
        formData.append('password', userForm.password)
        formData.append('username', userForm.name)
        formData.append('favorite', favorite)
        formData.append('phoneNumber', '081395187082')
        formData.append('role', 'user')

        const result = await setSignUp(formData)
        if(result.error) {
            toast.error(result.message)
        } else {
            toast.success('register success!')
            router.push('/auth/sign-up-success')
            localStorage.removeItem('user-form')
        }
    }

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    {imagePreview ? 
                                        <img src={imagePreview} className="img-upload" alt="upload" /> : <Image src={imagePreview} width={120} height={120} alt="upload" /> 
                                    }
                                </label>
                                <input 
                                    id="avatar" 
                                    type="file" 
                                    name="avatar" 
                                    accept="image/png, image/jpeg"
                                    onChange={(e) => {
                                        const img = e.target.files![0]
                                        setImagePreview(URL.createObjectURL(img))
                                        return setImage(img)
                                    }}
                                />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                        <div className="pt-50 pb-50">
                            <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                                Favorite Game
                            </label>
                            <select 
                                id="category" 
                                name="category" 
                                className="form-select d-block w-100 rounded-pill text-lg"
                                aria-label="Favorite Game"
                                value={favorite}
                                onChange={(e) => setFavorite(e.target.value)}
                            >
                                {categories.map((category: any) => (
                                    <option 
                                        key={category._id} 
                                        id={category._id} 
                                        value={category._id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                                
                            </select>
                        </div>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        <button 
                            type="button"
                            className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            onClick={onSubmit}
                        >
                            Create My Account
                        </button>
                        
                        <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                            role="button">Terms &
                            Conditions</a>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
