require('../models/database');
const Category = require('../models/Category');



/*
 *GET /
 *Homepage

 */

exports.homepage = async(req, res) => {

    res.render('index', { title: 'Cooking Blog - Home'});

}




async function insertDymmyCategoryData() {

    try {
        await Category.insertMany([
            {
                "name": "Thai",
                "image": "thai-food.jpg"
            },
            {
                "name": "American",
                "image": "american-food.jpg"
            },
            {
                "name": "Chinese",
                "image": "chinese-food.jpg"
            },{
                "name": "Maxican",
                "image": "maxican-food.jpg"
            },
            {
                "name": "Indian",
                "image": "indian-food.jpg"
            },
            {
                "name": "Spanish",
                "image": "spanish-food.jpg"
            }
        ]);
    } catch (error) {
        console.log('err', + error);
    }

}
insertDymmyCategoryData();
