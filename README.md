## 🕰️ Project History

- 🔹 Originally developed in: **2023**
- 🔹 Last updated/refactored in: **2025** (backend improvements and minor changes)

# 🛒 Repliq Commerce Backend API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

**🌐 [Live Website](https://repliq-commerce.netlify.app/) | 💻 [Frontend Code](https://github.com/Ashraful2880/client-repliq-commerce)**

</div>

A robust and scalable RESTful API backend for an e-commerce platform built with Node.js, Express.js, and MongoDB. This project showcases modern backend development practices with clean architecture, secure authentication, and comprehensive CRUD operations.

## 🌟 Features

### 🔐 Authentication & Security
- **JWT Authentication** - Secure user authentication with JSON Web Tokens
- **Password Hashing** - bcrypt for secure password storage
- **CORS Support** - Cross-Origin Resource Sharing configuration
- **Input Validation** - Request validation and sanitization

### 🛍️ E-commerce Functionality
- **Product Management** - Full CRUD operations for products
- **Category System** - Product categorization and filtering
- **Order Processing** - Complete order management workflow
- **Customer Management** - User and customer data handling
- **Inventory Tracking** - Stock management and SKU tracking

### 🎯 Advanced Features
- **Product Filtering** - Filter by category, featured, trending, best-selling
- **Search Capabilities** - Product search and filtering
- **Shopping Cart** - Cart item management
- **User Roles** - Customer and admin user management
- **Blog System** - Content management for blogs
- **Team Management** - Team member profiles

### 🏗️ Architecture & Code Quality
- **MVC Pattern** - Clean separation of concerns
- **Modular Structure** - Organized controllers, routes, and models
- **Environment Configuration** - Secure environment variable management
- **Error Handling** - Comprehensive error handling and logging
- **RESTful Design** - Standard REST API conventions

## 🚀 API Endpoints

### 📦 Products
```
GET    /products           # Get all products
GET    /products/:id       # Get single product
POST   /products           # Create new product
PUT    /products/:id       # Update product
DELETE /products/:id       # Delete product
GET    /findProducts       # Filter products by category
GET    /featuredProduct    # Get featured products
GET    /topTrending        # Get trending products
GET    /bestSelling        # Get best selling products
GET    /newArrival         # Get new arrivals
GET    /addToCart/:id      # Get product for cart
```

### 🏷️ Categories
```
GET    /productsCategory   # Get all product categories
```

### 📋 Orders
```
GET    /orders             # Get all orders
POST   /orders             # Create new order
PUT    /order/:id          # Update order status
```

### 👥 Customers
```
GET    /customers          # Get all customers
GET    /customer/:id       # Get single customer
POST   /customers          # Create new customer
DELETE /customer/:id       # Delete customer
```

### 🔐 Authentication
```
POST   /signup             # User registration
POST   /login              # User login
GET    /users              # Get all users
POST   /users              # Create new user
```

### 📝 Content Management
```
GET    /blogs              # Get all blog posts
GET    /teams              # Get all team members
```

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with native driver
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Environment Management:** dotenv
- **HTTP Client:** CORS enabled
- **Payment Integration:** SSLCommerz (ready)

## 📁 Project Structure

```
src/
├── config/
│   ├── database.js          # Database connection configuration
│   └── db.js                # Database utilities
├── controllers/
│   ├── productController.js      # Product business logic
│   ├── productCategoryController.js
│   ├── orderController.js        # Order management
│   ├── customerController.js     # Customer operations
│   ├── userController.js         # User authentication
│   ├── blogController.js         # Blog management
│   └── teamController.js         # Team management
├── models/
│   ├── product.js               # Product schema
│   ├── productCategory.js       # Category schema
│   ├── order.js                 # Order schema
│   ├── customer.js              # Customer schema
│   ├── user.js                  # User schema
│   ├── blog.js                  # Blog schema
│   └── team.js                  # Team schema
├── routes/
│   ├── productRoutes.js         # Product endpoints
│   ├── productCategoryRoutes.js # Category endpoints
│   ├── orderRoutes.js           # Order endpoints
│   ├── customerRoutes.js        # Customer endpoints
│   ├── userRoutes.js            # User endpoints
│   ├── blogRoutes.js            # Blog endpoints
│   └── teamRoutes.js            # Team endpoints
├── middlewares/
│   ├── auth.js                  # Authentication middleware
│   └── errorHandler.js          # Error handling middleware
└── app.js                       # Express app configuration
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ashraful2880/server-repliq-commerce.git
cd server-repliq-commerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
DB_NAME=Repliq-Commerce
PRODUCT_COLLECTION=Products
PRODUCT_CATEGORY_COLLECTION=Pro-Category
ORDER_COLLECTION=Orders
BLOG_COLLECTION=Blogs
USER_COLLECTION=Users
CUSTOMER_COLLECTION=Customers
TEAM_COLLECTION=Teams
PORT=5000
```

4. **Start the server**
```bash
# Production
npm start

# Development (with nodemon)
npm run start-dev
```

5. **Verify installation**
The server will start on `http://localhost:5000`
```bash
curl http://localhost:5000/
# Response: "Running Replic Commerce Server"
```

## 🧪 Testing

Test the API endpoints using the included test script:
```bash
node test-endpoints.js
```

Or use tools like Postman, Insomnia, or curl to test individual endpoints.

## 🔧 Configuration

### Database Collections
The application uses the following MongoDB collections:
- `Products` - Product catalog
- `Pro-Category` - Product categories
- `Orders` - Customer orders
- `Users` - System users
- `Customers` - Customer profiles
- `Blogs` - Blog posts
- `Teams` - Team member profiles

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `DB_USER` | MongoDB username | ✅ |
| `DB_PASS` | MongoDB password | ✅ |
| `DB_NAME` | Database name | ✅ |
| `PORT` | Server port (default: 5000) | ❌ |
| `*_COLLECTION` | Collection names | ✅ |

## 🚀 Deployment

### MongoDB Atlas Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Add your IP to the whitelist
4. Create a database user
5. Get the connection string

### Heroku Deployment
```bash
# Install Heroku CLI
heroku login
heroku create your-app-name
heroku config:set DB_USER=your_username
heroku config:set DB_PASS=your_password
# ... set other environment variables
git push heroku main
```

## 📊 Performance Features

- **Efficient Queries** - Optimized MongoDB queries
- **Connection Pooling** - MongoDB native driver connection pooling
- **Error Handling** - Comprehensive error responses
- **CORS Configuration** - Properly configured for web applications
- **Environment Security** - Secure credential management

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashraful Islam**
- GitHub: [@Ashraful2880](https://github.com/Ashraful2880)
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]

## 🙏 Acknowledgments

- Express.js team for the excellent framework
- MongoDB team for the robust database solution
- Node.js community for continuous innovation
- All contributors and supporters

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Ashraful Islam](https://github.com/Ashraful2880)

</div>
