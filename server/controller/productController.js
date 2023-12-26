const Product = require('../model/Product Model');
const Image = require('../model/Image Model');
const Cart = require('../model/Cart Model');
const User = require('../model/UserModel');
const Wishlist = require('../model/Favorite Model')
exports.addProduct = async (req, res) => {
    try {
        const { name, title, description, price, rating, category, isDeleted, isTopSelling } = req.body;

        // Create a new product
        const newProduct = new Product({
            name,
            title,
            description,
            price,
            rating,
            category,
            isDeleted: isDeleted || false,
            isTopSelling: isTopSelling || false,
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};




exports.getAllProducts = async (req, res) => {
    try {
        // Extract pagination parameters from the query string
        const { page = 1, pageSize = 10 } = req.query;

        // Parse the parameters to integers
        const pageNumber = parseInt(page);
        const limit = parseInt(pageSize);

        // Calculate the skip value for pagination
        const skip = (pageNumber - 1) * limit;

        // Query the database with pagination
        const products = await Product.find({ isDeleted: false })
            .skip(skip)
            .limit(limit);

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};




exports.getAllCartByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        // Check if the category is provided
        if (!category) {
            return res.status(400).json({ message: "Category is required" });
        }

        // Query the database for items in the cart by category
        const cartItems = await Cart.find({ category });

        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};





exports.getTopSellingProducts = async (req, res) => {
    try {
        // Query the database for products where isTopSelling is true
        const topSellingProducts = await Product.find({ isTopSelling: true });

        res.status(200).json(topSellingProducts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};



exports.editProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, title, description, price, rating, category, isTopSelling } = req.body;

        // Check if productId is provided
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        // Find the product by ID
        let product = await Product.findById(productId);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update product properties
        product.name = name || product.name;
        product.title = title || product.title;
        product.description = description || product.description;
        product.price = price || product.price;
        product.rating = rating || product.rating;
        product.category = category || product.category;
        product.isTopSelling = isTopSelling || product.isTopSelling;

        // Save the updated product
        product = await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        // Check if productId is provided
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        // Find the product by ID
        let product = await Product.findById(productId);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Set isDeleted to true
        product.isDeleted = true;

        // Save the updated product
        product = await product.save();

        res.status(200).json({ message: "Product deleted successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


exports.getProductsWithImage = async (req, res) => {
    try {
        const productsWithImage = await Product.aggregate([
            {
                $match: { isDeleted: false } // Match products that are not deleted
            },
            {
                $lookup: {
                    from: 'images', // The name of the image table
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'image'
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    title: 1,
                    rating: 1,
                    price: 1,
                    category: 1,
                    'image.imageUrl': 1
                }
            }
        ]);

        res.status(200).json(productsWithImage);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.addOrUpdateImageUrl = async (req, res) => {
    try {
        const { productId } = req.params;
        const { imageUrl } = req.body;

        // Check if productId is provided
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        // Find the product by ID
        let product = await Product.findById(productId);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if an image record already exists for the product
        let image = await Image.findOne({ productId });

        // If an image record exists, update the imageUrl
        if (image) {
            image.imageUrl = imageUrl;
        } else {
            // If no image record exists, create a new one
            image = new Image({
                productId,
                imageUrl
            });
        }

        // Save the image record
        image = await image.save();

        res.status(200).json({ message: "Image URL added/updated successfully", image });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
exports.getProductWithImage = async (req, res) => {
    try {
        const { productId } = req.params;

        // Check if productId is provided
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }



        if (productWithImage.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(productWithImage[0]);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const  userId = req.user._id;
        const {productId}  = req.params;
        

        // Check if the item is already in the cart
        const existingCartItem = await Cart.findOne({ userId, productId });

        if (existingCartItem) {
            // If the item is already in the cart, you may want to update the quantity or handle it accordingly
            // For simplicity, this example assumes each item is unique in the cart
            return res.status(400).json({ message: 'Item already in the cart' });
        }

        // Add item to the cart
        const cartItem = new Cart({ userId, productId });
        await cartItem.save();

        res.status(201).json({ message: 'Item added to the cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.addToWishlist = async (req, res) => {
    try {
        const  userId = req.user._id;
        const productId = req.params.productId;

      const user = await User.findById(userId);
      const product = await Product.findById(productId);
  
      if (!user || !product) {
        return res.status(404).json({ error: 'User or product not found' });
      }
  
      const existingWishlistItem = await Wishlist.findOne({ userId, productId });
  
      if (existingWishlistItem) {
        return res.status(400).json({ error: 'Product already in the wishlist' });
      }
  
      const wishlistItem = new Wishlist({ userId, productId });
      await wishlistItem.save();
  
      return res.status(201).json({ message: 'Product added to wishlist successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
exports.getAllCarts = async (req, res) => {
    const  userId = req.user._id;
  try {
    const carts = await Cart.find({}).populate('productId').populate(userId);
    res.json({ success: true, carts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


exports.getProductDetails = async (req, res) => {
    try {
      const productId = req.params.productId;
  
      const productDetails = await Product.findById(productId);
  
      if (!productDetails) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      const images = await Image.find({ productId });
  
      const productWithImages = {
        ...productDetails.toObject(),
        images: images.map(image => image.imageUrl),
      };
  
      res.json(productWithImages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  exports. getCartProducts = async (req, res) => {
    try {
        const  userId = req.user._id;
    
        const cartItems = await Cart.find({ userId }).populate('productId');
    
        if (!cartItems || cartItems.length === 0) {
          return res.status(404).json({ message: 'Cart is empty' });
        }
    
        const productDetails = cartItems.map(cartItem => {
          const { _id, name, price } = cartItem.productId;
          const quantity = cartItem.quantity;
    
          return {
            productId: _id,
            name,
            price,
            quantity,
          };
        });
    
        const productIds = cartItems.map(cartItem => cartItem.productId._id);
        const images = await Image.find({ productId: { $in: productIds } });
    
        const imageMap = {};
        images.forEach(image => {
          imageMap[image.productId.toString()] = image.imageUrl;
        });
    
        const productDetailsWithImages = productDetails.map(productDetail => ({
          ...productDetail,
          imageUrl: imageMap[productDetail.productId.toString()],
        }));
    
        res.json(productDetailsWithImages);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    };
    
    exports.deleteProductFromCart = async (req, res) => {
        try {
            const  userId = req.user._id;
            const productId = req.params.productId; 
       
          const cartItem = await Cart.findOneAndDelete({ userId, 'productId': productId });
      
          if (!cartItem) {
            return res.status(404).json({ message: 'Product not found in the cart' });
          }
      
          res.json({ message: 'Product successfully removed from the cart' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      };

      exports. getwishlistProducts = async (req, res) => {
        try {
            const  userId = req.user._id;
        
            const cartItems = await Wishlist.find({ userId }).populate('productId');
        
            if (!cartItems || cartItems.length === 0) {
              return res.status(404).json({ message: 'Cart is empty' });
            }
        
            const productDetails = cartItems.map(cartItem => {
              const { _id, name, price } = cartItem.productId;
              const quantity = cartItem.quantity;
        
              return {
                productId: _id,
                name,
                price,
                quantity,
              };
            });
        
            const productIds = cartItems.map(cartItem => cartItem.productId._id);
            const images = await Image.find({ productId: { $in: productIds } });
        
            const imageMap = {};
            images.forEach(image => {
              imageMap[image.productId.toString()] = image.imageUrl;
            });
        
            const productDetailsWithImages = productDetails.map(productDetail => ({
              ...productDetail,
              imageUrl: imageMap[productDetail.productId.toString()],
            }));
        
            res.json(productDetailsWithImages);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
        };
        exports.getProductsByCategory = async (req, res) => {
          try {
            const category = req.params.category;
        
            const products = await Product.find({ category, isDeleted: false });
        
            if (!products || products.length === 0) {
              return res.status(404).json({ message: 'No products found for the given category' });
            }
        
            const productIds = products.map(product => product._id);
        
            const images = await Image.find({ productId: { $in: productIds } });
        
            const imageMap = {};
            images.forEach(image => {
              imageMap[image.productId.toString()] = image.imageUrl;
            });
        
            const productsWithImages = products.map(product => ({
              ...product.toObject(),
              imageUrl: imageMap[product._id.toString()],
            }));
        
            res.json(productsWithImages);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
        };
        
        exports.addNewProduct = async (req, res) => {
          try {
            const { name, title, description, price, rating, category, imageUrl } = req.body;
        
            if (!name || !title || !description || !price || !category || !imageUrl) {
              return res.status(400).json({ message: 'Name, title, description, price, category, and imageUrl are required' });
            }
        
            const newProduct = new Product({
              name,
              title,
              description,
              price,
              rating: rating || 0,
              category,
            });
        
            const savedProduct = await newProduct.save();
        
            const newImage = new Image({
              imageUrl,
              productId: savedProduct._id,
            });
        
            await newImage.save();
        
            res.json({ message: 'New product added successfully', product: savedProduct });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
        };
        

exports.softDeleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId; 

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.isDeleted = true;

    const updatedProduct = await product.save();

    res.json({ message: 'Product soft deleted successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




exports.removeProductFromFavorites = async (req, res) => {
  try {
      const  userId = req.user._id;
      const productId = req.params.productId; 
 
    const cartItem = await Wishlist.findOneAndDelete({ userId, 'productId': productId });

    if (!cartItem) {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    res.json({ message: 'Product successfully removed from the cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getTopSellingProducts = async (req, res) => {
  try {
    const topSellingProducts = await Product.find({ isTopSelling: true });

    res.json(topSellingProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getEightProducts = async (req, res) => {
  try {
    const eightProducts = await Product.find().limit(8);

    res.json(eightProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






