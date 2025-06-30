To install the listed dependencies for your Node.js application, follow these steps:

---

### ✅ 1. **Open your terminal**

Navigate to your project directory where your `package.json` file is located.

---

### ✅ 2. **Run this `npm install` command**

```bash
npm install bcrypt@^5.1.0 cors@^2.8.5 dotenv@^16.3.1 express@^4.18.2 jsonwebtoken@^9.0.1 mongoose@^7.3.2 nodemon@^3.0.1 razorpay@^2.9.1 swagger-jsdoc@^6.2.8 swagger-ui-express@^5.0.0
```

---

### 📝 Notes:

* This will install all the required packages as per the versions you listed.
* After installing, your `package.json` file should reflect these versions under `dependencies`.
* You can add `"type": "module"` in `package.json` if you're using ES Modules (with `import`/`export` syntax).

---

### ✅ 3. **Start your server (if applicable)**

For development with `nodemon`, use:

```bash
npx nodemon your-entry-file.js
```

Replace `your-entry-file.js` with your actual entry file, e.g., `index.js`, `server.js`, or `app.js`.

---

## connect with database
1) ![alt text](image.png)
2) ![alt text](image-1.png)
3) ![alt text](image-2.png)
4) ![alt text](image-3.png)
5) ![alt text](image-4.png)
6) id:ritiksharma555598 pass:ritiksharma555598
7) ![alt text](image-5.png)
8) ![alt text](image-6.png)
9) ![alt text](image-7.png)
10) ![alt text](image-8.png)
11) 

12) module=>service=>controller=>route=>access end point
13) ![alt text](image-9.png)
14) ![alt text](image-10.png)
15) ![alt text](image-11.png)

## branch_2_creating_the_controller
1) created the adminOrder.controller.js
2) cart.controller.js
3) created the cartItem.controller.js
4) created the order.controller.js
5) created the product.controller.js
6) created the rating.controller.js
7) created the review.controller.js
8) created the middle ware:authenticat.js

## branch_3_creating_routes
1) created adminOrder.routes.js
2) created cartItem.routes.js
3) created cartItem.routes.js
4) created order.routes.js
5) created product.admin.routes.js
6) created rating.routes.js
7) created rating.routes.js
8) 
## branch_4_testing_Postmain 
1) sign-up a user: http://localhost:5454/auth/signin
2) sing-in a user: http://localhost:5454/auth/signin
3) profile: http://localhost:5454/api/users/profile
4) create-a product: http://localhost:5454/api/admin/products/ => after that get the id of 5) created product (_id: 68574d2cb73ca0883311c705)
6) get a cart: http://localhost:5454/api/cart/
7) add-item-to-cart: http://localhost:5454/api/cart/add
8) get a cart: http://localhost:5454/api/cart/
9) create a order:http://localhost:5454/api/orders/
10) remove a cart Item: (for that we need to pass the _id of cartItems which is avaialbe in the cart details for that we need to get the cart in that cartItems will be there from there copy the _id and hit it in the remove cart item url): http://localhost:5454/api/cart_items/68574dbbb73ca0883311c714

11) update cartItem: http://localhost:5454/api/cart_items/68575c5ee5a7b190be909599

12) find-product-by-id: http://localhost:5454/api/products/id/68574d2cb73ca0883311c705

13) get-all-product: http://localhost:5454/api/products?color=white
