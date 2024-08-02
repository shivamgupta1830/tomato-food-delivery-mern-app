import userModel from "../models/userModels.js";

//ADD

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      {
        cartData[req.body.itemId] = 1;
      }
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    return res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

//Remove

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    return res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    return res.json({ success: true, cartData });
  } catch (error) {
    return res.json({ success: false, message: "error" });
  }
};

export { addToCart, removeFromCart, getCart };
