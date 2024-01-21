import React, { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        assigner: '',
        price: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/append', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Data submitted successfully");
                // Reset form data to initial state
                setFormData({
                    name: '',
                    description: '',
                    assigner: '',
                    price: ''
                });
            }
        } catch (error) {
            console.error("Error in submitting form data:", error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="assigner" value={formData.assigner} onChange={handleChange} placeholder="Assigner" />
            <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
