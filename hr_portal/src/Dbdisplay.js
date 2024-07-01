// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Dbdisplay.css';

// // const Dbdisplay = () => {
// //     const [items, setItems] = useState([]);

// //     useEffect(() => {
// //         fetchData();
// //     }, []);

// //     const fetchData = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:3001/items');
// //             setItems(response.data);
// //         } catch (error) {
// //             console.error('Error fetching data:', error);
// //         }
// //     };

// //     const handleSelectedChange = async (id) => {
// //         try {
// //             const currentItem = items.find(item => item._id === id);
// //             const newSelected = !currentItem.selected; // Toggle selected status

// //             // Check if nselected is currently true, if true, set it to false
// //             if (currentItem.nselected) {
// //                 await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: false });
// //             }

// //             await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: newSelected });
// //             fetchData(); // Refetch data to update the UI
// //         } catch (error) {
// //             console.error('Error updating selected status:', error);
// //         }
// //     };

// //     const handleNSelectedChange = async (id) => {
// //         try {
// //             const currentItem = items.find(item => item._id === id);
// //             const newNSelected = !currentItem.nselected; // Toggle nselected status

// //             // Check if selected is currently true, if true, set it to false
// //             if (currentItem.selected) {
// //                 await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: false });
// //             }

// //             await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: newNSelected });
// //             fetchData(); // Refetch data to update the UI
// //         } catch (error) {
// //             console.error('Error updating not selected status:', error);
// //         }
// //     };

// //     return (
// //         <div className="db-display">
// //             <h2>Applicants Database</h2>
// //             {items.length > 0 ? (
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Date of Birth</th>
// //                             <th>Education</th>
// //                             <th>Address</th>
// //                             <th>Phone Number</th>
// //                             <th>Work Experience (Years)</th>
// //                             <th>Resume</th>
// //                             <th>Selected</th>
// //                             <th>Not Selected</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {items.map(item => (
// //                             <tr key={item._id}>
// //                                 <td>{item.name}</td>
// //                                 <td>{new Date(item.dob).toLocaleDateString()}</td>
// //                                 <td>{item.education}</td>
// //                                 <td>{item.address}</td>
// //                                 <td>{item.phone}</td>
// //                                 <td>{item.experience}</td>
// //                                 <td>
// //                                 <a href={`http://localhost:3001/uploads/${item.resume}`} target="_blank" rel="noopener noreferrer">
// //                                         View Resume
// //                                     </a>
// //                                 </td>
// //                                 <td>
// //                                     <input
// //                                         type="checkbox"
// //                                         checked={item.selected}
// //                                         onChange={() => handleSelectedChange(item._id)}
// //                                     />
// //                                 </td>
// //                                 <td>
// //                                     <input
// //                                         type="checkbox"
// //                                         checked={item.nselected}
// //                                         onChange={() => handleNSelectedChange(item._id)}
// //                                     />
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             ) : (
// //                 <p>No applicants found.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default Dbdisplay;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Dbdisplay.css';

// // const Dbdisplay = () => {
// //     const [items, setItems] = useState([]);
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [filter, setFilter] = useState('all');

// //     useEffect(() => {
// //         fetchData();
// //     }, []);

// //     const fetchData = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:3001/items');
// //             setItems(response.data);
// //         } catch (error) {
// //             console.error('Error fetching data:', error);
// //         }
// //     };

// //     const handleSelectedChange = async (id) => {
// //         try {
// //             const currentItem = items.find(item => item._id === id);
// //             const newSelected = !currentItem.selected; // Toggle selected status

// //             // Check if nselected is currently true, if true, set it to false
// //             if (currentItem.nselected) {
// //                 await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: false });
// //             }

// //             await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: newSelected });
// //             fetchData(); // Refetch data to update the UI
// //         } catch (error) {
// //             console.error('Error updating selected status:', error);
// //         }
// //     };

// //     const handleNSelectedChange = async (id) => {
// //         try {
// //             const currentItem = items.find(item => item._id === id);
// //             const newNSelected = !currentItem.nselected; // Toggle nselected status

// //             // Check if selected is currently true, if true, set it to false
// //             if (currentItem.selected) {
// //                 await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: false });
// //             }

// //             await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: newNSelected });
// //             fetchData(); // Refetch data to update the UI
// //         } catch (error) {
// //             console.error('Error updating not selected status:', error);
// //         }
// //     };

// //     const handleSearchChange = (event) => {
// //         setSearchTerm(event.target.value);
// //     };

// //     const handleFilterChange = (newFilter) => {
// //         setFilter(newFilter);
// //     };

// //     const filteredItems = items.filter(item => {
// //         const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             item.phone.toLowerCase().includes(searchTerm.toLowerCase());
        
// //         const matchesFilter = (filter === 'all') ||
// //             (filter === 'selected' && item.selected) ||
// //             (filter === 'nselected' && item.nselected) ||
// //             (filter === 'inReview' && !item.selected && !item.nselected);

// //         return matchesSearch && matchesFilter;
// //     });

// //     return (
// //         <div className="db-display">
// //             <h2>Applicants Database</h2>
// //             <input
// //                 type="text"
// //                 placeholder="Search by Name or Phone..."
// //                 value={searchTerm}
// //                 onChange={handleSearchChange}
// //                 className="search-bar"
// //             />
// //             <div className="filters">
// //                 <button onClick={() => handleFilterChange('all')}>All</button>
// //                 <button onClick={() => handleFilterChange('selected')}>Selected</button>
// //                 <button onClick={() => handleFilterChange('nselected')}>Not Selected</button>
// //                 <button onClick={() => handleFilterChange('inReview')}>In Review</button>
// //             </div>
// //             {filteredItems.length > 0 ? (
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Date of Birth</th>
// //                             <th>Education</th>
// //                             <th>Address</th>
// //                             <th>Phone Number</th>
// //                             <th>Work Experience (Years)</th>
// //                             <th>Resume</th>
// //                             <th>Selected</th>
// //                             <th>Not Selected</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {filteredItems.map(item => (
// //                             <tr key={item._id}>
// //                                 <td>{item.name}</td>
// //                                 <td>{new Date(item.dob).toLocaleDateString()}</td>
// //                                 <td>{item.education}</td>
// //                                 <td>{item.address}</td>
// //                                 <td>{item.phone}</td>
// //                                 <td>{item.experience}</td>
// //                                 <td>
// //                                     <a href={`http://localhost:3001/uploads/${item.resume}`} target="_blank" rel="noopener noreferrer">
// //                                         View Resume
// //                                     </a>
// //                                 </td>
// //                                 <td>
// //                                     <input
// //                                         type="checkbox"
// //                                         checked={item.selected}
// //                                         onChange={() => handleSelectedChange(item._id)}
// //                                     />
// //                                 </td>
// //                                 <td>
// //                                     <input
// //                                         type="checkbox"
// //                                         checked={item.nselected}
// //                                         onChange={() => handleNSelectedChange(item._id)}
// //                                     />
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             ) : (
// //                 <p>No applicants found.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default Dbdisplay;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dbdisplay.css';

// const Dbdisplay = () => {
//     const [items, setItems] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filter, setFilter] = useState('all');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/items');
//             setItems(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleSelectedChange = async (id) => {
//         try {
//             const currentItem = items.find(item => item._id === id);
//             const newSelected = !currentItem.selected;

//             if (currentItem.nselected) {
//                 await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: false });
//             }

//             await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: newSelected });
//             fetchData();
//         } catch (error) {
//             console.error('Error updating selected status:', error);
//         }
//     };

//     const handleNSelectedChange = async (id) => {
//         try {
//             const currentItem = items.find(item => item._id === id);
//             const newNSelected = !currentItem.nselected;

//             if (currentItem.selected) {
//                 await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: false });
//             }

//             await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: newNSelected });
//             fetchData();
//         } catch (error) {
//             console.error('Error updating not selected status:', error);
//         }
//     };

//     const handleFilterChange = (newFilter) => {
//         setFilter(newFilter);
//     };

//     const filteredItems = items.filter(item => {
//         if (filter === 'selected') return item.selected;
//         if (filter === 'nselected') return item.nselected;
//         if (filter === 'inReview') return !item.selected && !item.nselected;
//         return true;
//     }).filter(item =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.phone.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="db-display">
//             <h2>Applicants Database</h2>
//             <div className="filters">
//                 <button onClick={() => handleFilterChange('all')}>All</button>
//                 <button onClick={() => handleFilterChange('selected')}>Selected</button>
//                 <button onClick={() => handleFilterChange('nselected')}>Not Selected</button>
//                 <button onClick={() => handleFilterChange('inReview')}>In Review</button>
//             </div>
//             <input
//                 type="text"
//                 placeholder="Search by Name, ID, or Phone"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-bar"
//             />
//             {filteredItems.length > 0 ? (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Date of Birth</th>
//                             <th>Education</th>
//                             <th>Address</th>
//                             <th>Phone Number</th>
//                             <th>Work Experience (Years)</th>
//                             <th>Resume</th>
//                             <th>Selected</th>
//                             <th>Not Selected</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredItems.map(item => (
//                             <tr key={item._id}>
//                                 <td>{item.name}</td>
//                                 <td>{new Date(item.dob).toLocaleDateString()}</td>
//                                 <td>{item.education}</td>
//                                 <td>{item.address}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.experience}</td>
//                                 <td>
//                                     <a href={`http://localhost:3001/uploads/${item.resume}`} target="_blank" rel="noopener noreferrer">
//                                         View Resume
//                                     </a>
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="checkbox"
//                                         checked={item.selected}
//                                         onChange={() => handleSelectedChange(item._id)}
//                                     />
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="checkbox"
//                                         checked={item.nselected}
//                                         onChange={() => handleNSelectedChange(item._id)}
//                                     />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No applicants found.</p>
//             )}
//         </div>
//     );
// };

// export default Dbdisplay;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dbdisplay.css';

// const Dbdisplay = () => {
//     const [items, setItems] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filter, setFilter] = useState('all');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/items');
//             setItems(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleSelectedChange = async (id) => {
//         try {
//             const currentItem = items.find(item => item._id === id);
//             const newSelected = !currentItem.selected;

//             if (currentItem.nselected) {
//                 await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: false });
//             }

//             await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: newSelected });
//             fetchData();
//         } catch (error) {
//             console.error('Error updating selected status:', error);
//         }
//     };

//     const handleNSelectedChange = async (id) => {
//         try {
//             const currentItem = items.find(item => item._id === id);
//             const newNSelected = !currentItem.nselected;

//             if (currentItem.selected) {
//                 await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: false });
//             }

//             await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: newNSelected });
//             fetchData();
//         } catch (error) {
//             console.error('Error updating not selected status:', error);
//         }
//     };

//     const handleFilterChange = (newFilter) => {
//         setFilter(newFilter);
//     };

//     const filteredItems = items.filter(item => {
//         if (filter === 'selected') return item.selected;
//         if (filter === 'nselected') return item.nselected;
//         if (filter === 'inReview') return !item.selected && !item.nselected;
//         return true;
//     }).filter(item =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.phone.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="db-display">
//             <h2>Applicants Database</h2>
//             <div className="filters-search-bar">
//                 <div className="filters">
//                     <button onClick={() => handleFilterChange('all')}>All</button>
//                     <button onClick={() => handleFilterChange('selected')}>Selected</button>
//                     <button onClick={() => handleFilterChange('nselected')}>Not Selected</button>
//                     <button onClick={() => handleFilterChange('inReview')}>In Review</button>
//                 </div>
//                 <input
//                     type="text"
//                     placeholder="Search by Name, ID, or Phone"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="search-bar"
//                 />
//             </div>
//             {filteredItems.length > 0 ? (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Date of Birth</th>
//                             <th>Education</th>
//                             <th>Address</th>
//                             <th>Phone Number</th>
//                             <th>Work Experience (Years)</th>
//                             <th>Resume</th>
//                             <th>Selected</th>
//                             <th>Not Selected</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredItems.map(item => (
//                             <tr key={item._id}>
//                                 <td>{item.name}</td>
//                                 <td>{new Date(item.dob).toLocaleDateString()}</td>
//                                 <td>{item.education}</td>
//                                 <td>{item.address}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.experience}</td>
//                                 <td>
//                                     <a href={`http://localhost:3001/uploads/${item.resume}`} target="_blank" rel="noopener noreferrer">
//                                         View Resume
//                                     </a>
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="checkbox"
//                                         checked={item.selected}
//                                         onChange={() => handleSelectedChange(item._id)}
//                                     />
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="checkbox"
//                                         checked={item.nselected}
//                                         onChange={() => handleNSelectedChange(item._id)}
//                                     />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No applicants found.</p>
//             )}
//         </div>
//     );
// };

// export default Dbdisplay;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dbdisplay.css';

const Dbdisplay = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

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

    const handleSelectedChange = async (id) => {
        try {
            const currentItem = items.find(item => item._id === id);
            const newSelected = !currentItem.selected;

            if (currentItem.nselected) {
                await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: false });
            }

            await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: newSelected });
            fetchData();
        } catch (error) {
            console.error('Error updating selected status:', error);
        }
    };

    const handleNSelectedChange = async (id) => {
        try {
            const currentItem = items.find(item => item._id === id);
            const newNSelected = !currentItem.nselected;

            if (currentItem.selected) {
                await axios.patch(`http://localhost:3001/items/${id}/selected`, { selected: false });
            }

            await axios.patch(`http://localhost:3001/items/${id}/nselected`, { nselected: newNSelected });
            fetchData();
        } catch (error) {
            console.error('Error updating not selected status:', error);
        }
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredItems = items.filter(item => {
        if (filter === 'selected') return item.selected;
        if (filter === 'nselected') return item.nselected;
        if (filter === 'inReview') return !item.selected && !item.nselected;
        return true;
    }).filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="db-display">
            <h2>Applicants Database</h2>
            <div className="filters-search-bar">
                <input
                    type="text"
                    placeholder="Search by Name, ID, or Phone"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <div className="filters">
                    <button onClick={() => handleFilterChange('all')}>All</button>
                    <button onClick={() => handleFilterChange('selected')}>Selected</button>
                    <button onClick={() => handleFilterChange('nselected')}>Not Selected</button>
                    <button onClick={() => handleFilterChange('inReview')}>In Review</button>
                </div>
            </div>
            {filteredItems.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Education</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Work Experience (Years)</th>
                            <th>Resume</th>
                            <th>Selected</th>
                            <th>Not Selected</th>
                            <th>Mail to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map(item => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{new Date(item.dob).toLocaleDateString()}</td>
                                <td>{item.education}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>{item.experience}</td>
                                <td>
                                    <a href={`http://localhost:3001/uploads/${item.resume}`} target="_blank" rel="noopener noreferrer">
                                        View Resume
                                    </a>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={item.selected}
                                        onChange={() => handleSelectedChange(item._id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={item.nselected}
                                        onChange={() => handleNSelectedChange(item._id)}
                                    />
                                </td>
                                <td>
                                  <a href={`mailto:${item.email}`}>{item.email}</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No applicants found.</p>
            )}
        </div>
    );
};

export default Dbdisplay;
