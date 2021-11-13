import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const location = useLocation();
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const redirect_uri = location.state?.from || '/products';
    const onSubmit = data => {
        data.userEmail = user?.email;
        data.userName = user?.displayName;
        axios.post('https://nashville-baby-product-server.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Order Successful!');
                    history.push(redirect_uri);
                }
            })
    };
    return (
        <div className="p-5 mt-5 addproducts">

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true })} placeholder="title" />
                <input type="number" {...register("rating",)} placeholder="rating out of 5" />
                <input {...register("info")} placeholder="Short Description" />
                <input {...register("img")} placeholder="Image URL" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;