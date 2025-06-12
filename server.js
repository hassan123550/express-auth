// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./models/User');

// const app = express();
// app.use(express.json());

// // ✅ Root route to avoid "Cannot GET /" error
// app.get('/', (req, res) => {
//   res.send('Welcome to the User API!');
// });

// // MongoDB connection
// mongoose.connect('mongodb+srv://HassanAli:456ali123@myappcluster.jtey9jm.mongodb.net/myApp?retryWrites=true&w=majority')
// .then(() => console.log('✅ MongoDB connected'))
// .catch((err) => console.error('❌ Connection error:', err));

// // GET all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST new user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     const savedUser = await user.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // PUT (update user)
// app.put('/users/:id', async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // DELETE user
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Server start
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });






          //Check Get,Post,Put,Delete//




// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./models/User'); // یقینی بنائیں کہ یہ فائل موجود ہو

// const app = express();
// app.use(express.json());

// // ✅ Root route to avoid "Cannot GET /" error
// app.get('/', (req, res) => {
//   res.send('Welcome to the User API!');
// });

// // ✅ MongoDB connection
// mongoose.connect('mongodb+srv://HassanAli:456ali123@myappcluster.jtey9jm.mongodb.net/myApp?retryWrites=true&w=majority')
// .then(() => console.log('✅MongoDB Connected'))
// .catch((err) => console.err('Connection error:', err));



// ✅ GET all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ GET single user by ID with validation
// app.get('/users/:id', async (req, res) => {
//   const userId = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ message: 'Invalid user ID' });
//   }

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ POST (create new user)
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     const savedUser = await user.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ PUT (update user by ID with validation)
// app.put('/users/:id', async (req, res) => {
//   const userId = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ message: 'Invalid user ID' });
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ DELETE (delete user by ID with validation)
// app.delete('/users/:id', async (req, res) => {
//   const userId = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ message: 'Invalid user ID' });
//   }

//   try {
//     const deletedUser = await User.findByIdAndDelete(userId);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// ✅ Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });







             //SignUp/Login Updated//


// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./models/User'); // یقینی بنائیں کہ یہ فائل موجود ہو

// const app = express();
// app.use(express.json());

// // ✅ Root route to avoid "Cannot GET /" error
// app.get('/', (req, res) => {
//   res.send('Welcome to the User API!');
// });

// // ✅ MongoDB connection
// mongoose.connect('mongodb+srv://HassanAli:456ali123@myappcluster.jtey9jm.mongodb.net/myApp?retryWrites=true&w=majority')
// .then(() => console.log('✅MongoDB Connected'))
// .catch((err) => console.err('Connection error:', err));



// const bcrypt = require('bcrypt');

// // Signup route
// app.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save user
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });



// //login route
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     res.json({ message: "Login successful" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });











//Authentication Login



const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // یقینی بنائیں کہ یہ فائل موجود ہو
require('dotenv').config();

const app = express();
app.use(express.json());

// ✅ Root route to avoid "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Welcome to the User API!');
});


//frontend connect route
const authRoutes = require('./routes/auth');
app.use(authRoutes);

//Dashboard create
const dashboardRoute = require('./routes/home');
app.use('/', dashboardRoute);

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://HassanAli:456ali123@myappcluster.jtey9jm.mongodb.net/myApp?retryWrites=true&w=majority')
.then(() => console.log('✅MongoDB Connected'))
.catch((err) => console.err('Connection error:', err));



const jwt = require('jsonwebtoken');

// 🔐 Middleware to check token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: 'No token provided' });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};




//login route updated
// LOGIN Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.password !== password)
      return res.status(401).json({ message: 'Invalid password' });

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



//protected route


// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(403).json({ message: 'No token provided' });

//   const token = authHeader.split(" ")[1]; // "Bearer <token>"
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ message: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// };

// // ✅ Protected route
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Access granted to protected route!', user: req.user });
// });




//protected route

app.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json({ message: 'User profile fetched successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

