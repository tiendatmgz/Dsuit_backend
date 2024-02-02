const express = require("express");
const { Product } = require('../model/product.model')

const router = express.Router();

// ====admin route====
//ROUTE SAVE NEW PRODUCT 
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name || !req.body.gender ||
            !req.body.type || !req.body.price ||
            !req.body.size || !req.body.img ||
            !req.body.amount
        ) {
            return res.status(400).send({
                message: 'send all required fields: name, gender, type, price, size, img, amount'
            })
        }
        const newProduct = {
            name: req.body.name,
            gender: req.body.gender,
            type: req.body.type,
            price: req.body.price,
            size: req.body.size,
            img: req.body.img,
            amount: req.body.amount,
            describe: req.body.describe,
            reviews: req.body.reviews
        }
        const product = await Product.create(newProduct)
        return res.status(200).send(product)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product
router.get('/', async (req, res) => {
    try {
        const product = await Product.find({})
        return res.status(200).send({
            count: product.length,
            data: product
        })

    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men
router.get('/men', async (req, res) => {
    try {
        const product = await Product.find({ gender: 'men' })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /top
router.get('/men/top', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: { $in: ['vest', 'jacket', 'shirt'] } }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /bottom
router.get('/men/bottom', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: { $in: ['trouser', 'jean', 'short'] } }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /vest
router.get('/men/vest', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'vest' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /jacket
router.get('/men/jacket', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'jacket' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /shirt
router.get('/men/shirt', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'shirt' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /trouser
router.get('/men/trouser', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'trouser' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /jean
router.get('/men/jean', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'jean' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for men /short
router.get('/men/short', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'men' }, { type: 'short' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women
router.get('/women', async (req, res) => {
    try {
        const product = await Product.find({ gender: 'women' })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /top
router.get('/women/top', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: { $in: ['vest', 'jacket', 'shirt'] } }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /bottom
router.get('/women/bottom', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: { $in: ['trouser', 'jean', 'short'] } }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})


//route get all product for women /vest
router.get('/women/vest', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'vest' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /jacket
router.get('/women/jacket', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'jacket' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /shirt
router.get('/women/shirt', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'shirt' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /trouser
router.get('/women/trouser', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'trouser' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /jean
router.get('/women/jean', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'jean' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})
//route get all product for women /dress
router.get('/women/dress', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'dress' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get all product for women /short
router.get('/women/short', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'short' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})
//route get all product for /women/dress
router.get('/women/dress', async (req, res) => {
    try {
        const product = await Product.find({ $and: [{ gender: 'women' }, { type: 'dress' }] })
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get new-arrival
router.get('/newArrival', async (req, res) => {
    try {
        const product = await Product.find({
            updatedAt: {
                $gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
            }
        }).limit(10)
        return res.status(200).send({
            count: product.length,
            data: product
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

//route get random 10 record
router.get('/random', async (req, res) => {
    try {
        const product = await Product.aggregate([
            { $sample: { size: 10 } }
        ])
        return res.status(200).send(product)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})


//route get one product
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        return res.status(200).send(product)

    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

// route update product
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.name || !req.body.gender ||
            !req.body.type || !req.body.price ||
            !req.body.size || !req.body.img ||
            !req.body.amount

        ) {
            return res.status(400).send({
                message: 'send all required fields: name, gender, type, price, size, img'
            })
        }
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);
        if (!updateProduct) {
            return res.status(404).json({ message: 'product not found' })
        }
        return res.status(200).send({ message: 'product updated successfully!' })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})

// route delete product
router.delete('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        const result = await Product.deleteOne({ _id: id });
        if (!result) {
            return res.status(404).json({ message: 'product not found' })
        }
        return res.status(200).send({ message: 'product deleted successfully!' })
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})


module.exports = router