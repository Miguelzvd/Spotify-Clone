// middlewares.js
module.exports = (req, res, next) => {
  if (req.method === "GET" && req.path === "/artists" && req.query.name_like) {
    const searchTerm = req.query.name_like.toLowerCase();
    req.query.name_like = searchTerm; // Convertendo o termo de pesquisa para minúsculas
  }
  next();
};
