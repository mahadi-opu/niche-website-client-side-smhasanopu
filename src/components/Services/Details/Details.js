import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';
import { useForm } from "react-hook-form";
import './Details.css';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Details = () => {
    let { _id } = useParams();
    const [services] = useServices();
    const [detail, setDetail] = useState({});
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/Dashboard/MyOrders';
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.img = detail.img;
        data.name = detail.name;
        data.price = detail.price;
        data.discription = detail.discription;
        data.status = "pending"
        axios.post('https://nashville-baby-product-server.herokuapp.com/orders2', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Order Successful!');
                    history.push(redirect_uri);
                }
            })
    };

    useEffect(() => {
        const foundDetails = services.find(service => service._id === _id)
        setDetail(foundDetails);
    }, [services, _id]);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row pt-5 ">
                    <div className="col-md-4 mt-4">
                        <hr className="border-info border-3" />
                        <hr className="border-info border-3" />
                        <img className="img-fluid" src={detail?.img} alt="" />
                    </div>
                    <div className="col-md-4 border-top-0 border border-bottom-0">
                        <h2 className=" "> Package Name: </h2>
                        <h2 className="text-secondary"> {detail?.name}  </h2>
                        <h2 className="text-success"> ${detail?.price}  </h2>
                        <hr className="border-info border-3" />
                        <hr className="border-info border-3" />
                        <p>{detail?.discription}</p>
                        <div className="row">
                            {/* <div className="col-md-6 mb-3">
                            <button className="btn btn-info text-white ">Visiting Fee: ${detail?.price}</button></div> */}
                            <div className="col-md-12">
                                <Link to="/Products"><button className="btn btn-info text-white ">Back to All Products </button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 mb-5 mt-4 Shipping">
                        <hr className="border-info border-3" />
                        <hr className="border-info border-3" />
                        <h2 className="pt-4">Shipping & Billing</h2>
                        {/* <input type="date" /> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("userName", { required: true, maxLength: 200 })} value={user?.displayName || ''} />
                            <input {...register("email")} value={user?.email || ''} />
                            <input {...register("address")} placeholder="Address" />
                            <input {...register("phone")} placeholder="Phone Number" />
                            <input type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};



export default Details;