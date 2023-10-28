// import React, { useContext, useEffect } from 'react'
import * as React from 'react';
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductCard() {
    const context = useContext(myContext)
    const {product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice,setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);
    console.log(cartItems)

    const addCart = (product)=> {
        dispatch(addToCart(product));
        toast.success('add to cart');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-black title-font mb-2 text-white">Recent Listings</h1>
                    <div className="h-2 w-96 bg-[#445D48] rounded-sm"></div>
                </div>

                 <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).slice(0,8).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        return (
                            <div key={index} className="p-4 md:w-1/4  drop-shadow-lg " >
                                <div  className="h-full bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  >
                                    <div onClick={()=> window.location.href = `/productinfo/${id}`} className="flex justify-center cursor-pointer" >
                                        <img className=" rounded-xl w-11/12 h-60 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1" >E-Mandi</h2>
                                        <h1 className="title-font text-lg font-black text-gray-900 mb-3">{title}</h1>
                                         <p className="leading-relaxed mb-3">{item.description.}</p>
                                        <p className="leading-relaxed mb-3">₹{price}</p>
                                        <div className="flex justify-center">
                                        <button type="button" onClick={()=> addCart(item)}
                                            className="focus:outline-none text-white bg-[#445D48] hover:bg-green-900 focus:ring-4 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
    {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt=""
          onClick={()=> window.location.href = `/productinfo/${id}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> addCart(item)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card> */}
                        )
                    })} 

                </div>

            </div>
        </section >

    )
}

export default ProductCard


