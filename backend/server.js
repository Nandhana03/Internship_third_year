// const express = require('express');
// const connectDB = require('./db'); // Correct path to db.js
// const itemModel = require('./models/Item'); // Correct path to Item.js
// const cors = require('cors');
// const multer = require('multer'); // Middleware for handling multipart/form-data

// const app = express();
// app.use(express.json());
// app.use(cors());

// connectDB(); // Connect to MongoDB

// // Multer configuration for handling file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Save files to 'uploads' folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage });

// // Route to handle form submission with file upload
// app.use('/uploads', express.static('uploads'));

// app.post('/home', upload.single('resume'), (req, res) => {
//     const newItem = new itemModel({
//         name: req.body.name,
//         dob: req.body.dob,
//         education: req.body.education,
//         address: req.body.address,
//         phone: req.body.phone,
//         experience: req.body.experience,
//         resume: req.file.filename, 
//         email:req.body.email// Store the filename in MongoDB (you may need to adjust this based on your schema)
//     });

//     newItem.save()
//         .then(item => res.json(item)) // Respond with the saved item
//         .catch(err => res.status(400).json({ error: err.message })); // Handle errors
// });

// app.get('/items', (req, res) => {
//     itemModel.find()
//         .then(items => res.json(items)) // Respond with all items found
//         .catch(err => res.status(400).json({ error: err.message })); // Handle errors
// });

// // Example PATCH route in server.js
// // PATCH route to update status by item _id
// // app.patch('/items/:id', async (req, res) => {
// //     const { id } = req.params;
// //     const { selected, nselected } = req.body;

// //     try {
// //         let updateFields = {};

// //         // Update logic to ensure only one field is selected at a time
// //         if (selected !== undefined) {
// //             updateFields = { selected, nselected: false };
// //         } else if (nselected !== undefined) {
// //             updateFields = { nselected, selected: false };
// //         } else {
// //             return res.status(400).json({ error: 'Missing parameters' });
// //         }

// //         const updatedItem = await itemModel.findByIdAndUpdate(
// //             id,
// //             updateFields,
// //             { new: true }
// //         );

// //         if (!updatedItem) {
// //             return res.status(404).json({ error: 'Item not found' });
// //         }

// //         res.json(updatedItem);
// //     } catch (error) {
// //         res.status(400).json({ error: error.message });
// //     }
// // });

// // app.patch('/items/:id/nselected', async (req, res) => {
// //     const { id } = req.params;
// //     const { nselected } = req.body;

// //     try {
// //         const updatedItem = await itemModel.findByIdAndUpdate(
// //             id,
// //             { nselected, selected: !nselected }, // Ensure only one is true
// //             { new: true }
// //         );

// //         if (!updatedItem) {
// //             return res.status(404).json({ error: 'Item not found' });
// //         }

// //         res.json(updatedItem);
// //     } catch (error) {
// //         res.status(400).json({ error: error.message });
// //     }
// // });



// app.patch('/items/:id/selected', async (req, res) => {
//     const { id } = req.params;
//     const { selected } = req.body;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { selected },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // PATCH route to update nselected status by item _id
// app.patch('/items/:id/nselected', async (req, res) => {
//     const { id } = req.params;
//     const { nselected } = req.body;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { nselected },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const connectDB = require('./db'); // Assuming correct path to db.js
// const itemModel = require('./models/Item'); // Assuming correct path to Item.js
// const cors = require('cors');
// const multer = require('multer'); // Middleware for handling multipart/form-data

// const app = express();
// app.use(express.json());
// app.use(cors());

// connectDB(); // Connect to MongoDB

// // Multer configuration for handling file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Save files to 'uploads' folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage });

// // Route to serve uploaded files
// app.use('/uploads', express.static('uploads'));

// // POST route to handle form submission with file upload
// app.post('/home', upload.single('resume'), (req, res) => {
//     const newItem = new itemModel({
//         name: req.body.name,
//         dob: req.body.dob,
//         education: req.body.education,
//         address: req.body.address,
//         phone: req.body.phone,
//         experience: req.body.experience,
//         resume: req.file.filename,
//         email: req.body.email
//     });

//     newItem.save()
//         .then(item => res.json(item)) // Respond with the saved item
//         .catch(err => res.status(400).json({ error: err.message })); // Handle errors
// });

// // GET route to fetch all items
// app.get('/items', (req, res) => {
//     itemModel.find()
//         .then(items => res.json(items)) // Respond with all items found
//         .catch(err => res.status(400).json({ error: err.message })); // Handle errors
// });

// // PATCH route to update selected status by item _id
// app.patch('/items/:id/selected', async (req, res) => {
//     const { id } = req.params;
//     const { selected } = req.body;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { selected },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // PATCH route to update nselected status by item _id
// app.patch('/items/:id/nselected', async (req, res) => {
//     const { id } = req.params;
//     const { nselected } = req.body;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { nselected },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // PATCH route to update emailSent status by item _id
// app.patch('/items/:id/trackEmailSent', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { emailSent: 'Yes' },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const connectDB = require('./db'); // Assuming correct path to db.js
const itemModel = require('./models/Item'); // Assuming correct path to Item.js
const cors = require('cors');
const multer = require('multer'); // Middleware for handling multipart/form-data

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Connect to MongoDB

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Route to serve uploaded files
app.use('/uploads', express.static('uploads'));

// POST route to handle form submission with file upload
app.post('/home', upload.single('resume'), (req, res) => {
    const newItem = new itemModel({
        name: req.body.name,
        dob: req.body.dob,
        education: req.body.education,
        address: req.body.address,
        phone: req.body.phone,
        experience: req.body.experience,
        resume: req.file.filename,
        emailTo: req.body.emailTo, // Assuming you capture the emailTo field
        emailSent: 'No' // Initialize emailSent as 'No'
    });

    newItem.save()
        .then(item => res.json(item)) // Respond with the saved item
        .catch(err => res.status(400).json({ error: err.message })); // Handle errors
});

// GET route to fetch all items
app.get('/items', (req, res) => {
    itemModel.find()
        .then(items => res.json(items)) // Respond with all items found
        .catch(err => res.status(400).json({ error: err.message })); // Handle errors
});

// PATCH route to update selected status by item _id
app.patch('/items/:id/selected', async (req, res) => {
    const { id } = req.params;
    const { selected } = req.body;

    try {
        const updatedItem = await itemModel.findByIdAndUpdate(
            id,
            { selected },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PATCH route to update nselected status by item _id
app.patch('/items/:id/nselected', async (req, res) => {
    const { id } = req.params;
    const { nselected } = req.body;

    try {
        const updatedItem = await itemModel.findByIdAndUpdate(
            id,
            { nselected },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// // PATCH route to update emailSent status by item _id when email is sent
// app.patch('/items/:id/sendEmail', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const updatedItem = await itemModel.findByIdAndUpdate(
//             id,
//             { emailSent: 'Yes' },
//             { new: true }
//         );

//         if (!updatedItem) {
//             return res.status(404).json({ error: 'Item not found' });
//         }

//         res.json(updatedItem);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
