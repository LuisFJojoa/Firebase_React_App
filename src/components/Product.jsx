import React, {useState, useEffect} from 'react'
import {store} from '../services/firebaseconfig'
const Product = () => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [products, setProducts] = useState([])
    const [msgError, setMsgError] = useState(null)
    const [statusUpdate, setStatusUpdate] = useState(false)
    const [textBtnForm, setTextBtnForm] = useState('Create Product')
    const [updateProductId, setUpdateProductId] = useState('')

    const getAllProducts = async()=> {
        const {docs} = await store.collection('products').get()
        const productsArray = docs.map( item => ({
            id:item.id,
            ...item.data()
        }))
        //console.log(productsArray);
        setProducts(productsArray)
    }

    useEffect( () => {
        getAllProducts()
    },[])


    const createProduct = async (e) => {
        
        e.preventDefault()
        if (!productName.trim()) {
            setMsgError('Field product name is empty, please type')
        }

        if (!productPrice.trim()) {
            setMsgError('Field product price is empty, please type.')
        }

        const product = {
            name: productName,
            price: productPrice
        }

        try {
            const data = await store.collection('products').add(product)
            getAllProducts()
            //console.log("Product created")
        } catch (e) {
            console.log(e)
        }

        setFields()
    }


    const deleteProduct = async (productId) => {
        try {
            await store.collection('products').doc(productId).delete()
            getAllProducts()
            
        } catch (e) {
            
        }
    }

    const updateProduct = async (e) => {

        e.preventDefault()
        if (!productName.trim()) {
            setMsgError('Field product name is empty, please type')
        }

        if (!productPrice.trim()) {
            setMsgError('Field product price is empty, please type.')
        }

        const product = {
            name: productName,
            price: productPrice
        }
        
        try {
            await store.collection('products').doc(updateProductId).set(product)
            setStatusUpdate(false)
            setTextBtnForm('Create product')
            getAllProducts()
            setUpdateProductId('')
            
        } catch (e) {
            
        }
        
        setFields()
    }

    const getUpdateProduct = async (productId) => {
        try {
            const queryResult = await store.collection('products').doc(productId).get()
            console.log(queryResult.data());
            const { id, name, price } = queryResult.data()
            setUpdateProductId(productId)
            setProductPrice(price)
            setProductName(name)
            setStatusUpdate(true)
            setTextBtnForm('Update product')
            
            
        } catch (e) {
            console.log(e);
        }
    }

    const setFields = () => {
        setProductName('')
        setProductPrice('')
    }
    
    return (
        <div className="row mt-3">
            <div className="col"></div>
            <div className="col-4">
                <h2>Create a new product</h2>
                <form onSubmit={statusUpdate ? updateProduct:createProduct} className="form-group">
                    <input 
                    value={productName}
                    onChange={(e)=>{
                        setProductName(e.target.value)
                    }}
                    className="form-control mt-4"
                    placeholder="Type product name"
                    type="text"
                    />
                    <input 
                    value={productPrice}
                    onChange={(e)=>{
                        setProductPrice(e.target.value)
                    }}
                    className="form-control mt-4"
                    placeholder="Type product price $"
                    type="text"
                    />
                    {
                        <input 
                        className="btn btn-dark btn-block mt-4"
                        value = {`${textBtnForm}`}
                        type="submit"/>
                    }
                    
                </form>
                {
                    msgError != null ?
                    (
                        <div className="alert alert-danger mt-3 d-flex justify-content-center">
                            {msgError}
                        </div>
                    )
                    :
                    (
                       <span></span>
                    )
                }
            </div>
            <div className="col-4">
                <h2>Product's list</h2>
                <ul className="list-group">
                    {
                        products.length !== 0 ?
                        (
                            products.map( product =>(
                                <li 
                                className="list-group-item"
                                key={product.id}>
                                    {product.name} -- ${product.price}
                                    <button 
                                    onClick={() =>{
                                    deleteProduct(product.id);
                                    }} 
                                    className="btn btn-danger float-right">
                                        Delete
                                    </button>
                                    <button 
                                    onClick={() =>{
                                    getUpdateProduct(product.id)
                                    }} 
                                    className="btn btn-info float-right mr-1">
                                        Update
                                    </button>
                                </li>
                            ))
                        )
                        :
                        (
                            <span className="">Currently there is not products at list</span>
                        )
                    }
                        
                </ul>
                    
                
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Product
