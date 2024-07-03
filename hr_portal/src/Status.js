import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Status.css'; 

const Status = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item._id.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="status-table">
            <h2>Status</h2>
            <input 
                type="text" 
                placeholder="Search by ID, phone or Name..." 
                value={searchTerm} 
                onChange={handleSearch} 
                className="search-bar"
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>phone</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.phone}</td>
                            <td>{item.name}</td>
                            <td>
                                {item.selected ? 'Selected' : item.nselected ? 'Not Selected' : 'In Review'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Status;

