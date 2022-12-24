const PopularService = require("../services/popular.service");
const ProductService = require("../services/product.service");

exports.getList = async function (req, res) {
  try {
    const limit = 6;
    const popular = await PopularService.getList();

    const data = await Promise.all(
      popular.map(async (p) => {
        if (p._id === "popular_1") {
          p.products = await ProductService.getListPopularIds(limit);
          return p;
        }

        if (p._id === "popular_2") {
          p.products = await ProductService.getListNewArrivalsIds(limit);
          return p;
        }

        if (p._id === "popular_3") {
          p.products = await ProductService.getListBySalesIds(limit);
          return p;
        }

        if (p._id === "popular_4") {
          p.products = await ProductService.getListOfOffersIds(limit);
          return p;
        }

        if (p._id === "popular_5") {
          p.products = await ProductService.getListCommingSoonIds(limit);
          return p;
        }
      })
    );

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Popular Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
