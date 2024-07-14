import classes from "./Seller.module.css";
import { useState } from "react";

const Seller = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        large: 0,
        medium: 0,
        small: 0
    });
    const submitHandler = (event) => {
        event.preventDefault();
        props.onaddProduct(formData);
        setFormData({
            name: '',
            description: '',
            price: 0,
            large: 0,
            medium: 0,
            small: 0
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form className={classes.seller} onSubmit={submitHandler}>
            <div>
                <label>Shoe name
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>Description
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>Price
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </label>
            </div>
            <section>
                Quantity Available
                <div>
                    <label>Large
                        <input type="number" name="large" value={formData.large} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Medium
                        <input type="number" name="medium" value={formData.medium} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Small
                        <input type="number" name="small" value={formData.small} onChange={handleChange} />
                    </label>
                </div>
            </section>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default Seller;