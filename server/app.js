const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./Routes/authRoutes');
const productRoutes = require('./Routes/productRoutes');
const contactUsRoutes = require('./Routes/contactUsRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const cors = require('cors');




const app = express();

mongoose.connect("mongodb+srv://rafatmaita:wXYDFX5fQhRoKQc5@myfirstnodejscluster.zcjq63q.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Rafat you are a hero");
    }).catch(() => {
        console.log("Error With connect To The DataBase");
    });

    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());



    const stripe = require("stripe")("sk_test_51OJ9OfHaQ2tawrR904HMqYd4lITaGQvBP3HfdHwVlPxF1Df2qqW25NHQ0lGoHaVmE0lIcArVRUrohjqQwGaXbF8h006Y2XZj64");
    app.post("/payment", async (req, res) => {
        const { amount, id } = req.body;
        console.log("😊😊😊",id);
    console.log();
      try {
   

        const payment = await stripe.paymentIntents.create({
            amount:amount,
          currency: "USD",
          description: "Spatula company",
          payment_method: id,
          confirm: true,
          return_url: "http://localhost:3000/",
        });
        console.log("Payment", payment);
        res.json({
          message: "Payment successful",
          success: true,
        });
      } catch (error) {
        console.log("Error", error);
        res.json({
          message: "Payment failed",
          success: false,
        });
      }
    });
    










app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(productRoutes);
app.use(contactUsRoutes);
app.use(orderRoutes);

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
