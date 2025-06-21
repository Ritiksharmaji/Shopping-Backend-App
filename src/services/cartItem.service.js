const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.service.js");

// Create a new cart item
async function createCartItem(cartItemData) {
  try {
    const cartItem = new CartItem(cartItemData);
    cartItem.quantity = 1;
    cartItem.price = cartItem.product.price * cartItem.quantity;
    cartItem.discountedPrice =
      cartItem.product.discountedPrice * cartItem.quantity;

    const createdCartItem = await cartItem.save();
    return createdCartItem;
  } catch (error) {
    console.error("Error creating cart item:", error);
    throw new Error(error.message);
  }
}

// Update an existing cart item
async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    console.log("cartItemData ", item);

    if (!item) {
      throw new Error("Cart item not found: " + cartItemId);
    }

    const user = await userService.findUserById(item.userId);

    if (!user) {
      throw new Error("User not found: " + userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You can't update another user's cart item");
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw new Error(error.message);
  }
}

// Check if a cart item already exists in the user's cart
async function isCartItemExist(cart, product, size, userId) {
  try {
    const cartItem = await CartItem.findOne({ cart, product, size, userId });
    return cartItem;
  } catch (error) {
    console.error("Error checking if cart item exists:", error);
    throw new Error(error.message);
  }
}

// Remove a cart item
async function removeCartItem(userId, cartItemId) {
  try {
    // console.log(`userId - ${userId}, cartItemId - ${cartItemId}`);
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(cartItem.userId);
    const reqUser = await userService.findUserById(userId);

    if (user._id.toString() === reqUser._id.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    } else {
      throw new Error("You can't remove another user's item");
    }
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw new Error(error.message);
  }
}

// Find a cart item by its ID
async function findCartItemById(cartItemId) {
  try {
    //const cartItem = await CartItem.findById(cartItemId).populate("product");
    const cartItem = await CartItem.findById(cartItemId);

    if (cartItem) {
      return cartItem;
    } else {
      throw new Error(`CartItem not found with id: ${cartItemId}`);
    }
  } catch (error) {
    console.error("Error finding cart item by ID:", error);
    throw new Error(error.message);
  }
}

module.exports = {
  createCartItem,
  updateCartItem,
  isCartItemExist,
  removeCartItem,
  findCartItemById,
};
