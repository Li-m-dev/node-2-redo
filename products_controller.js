const create = async (req, res, next) => {
  await req.app.get('db').create_product([name, description, price,image_url])
  .then(() => res.status(200))
  .catch(err => {
    res.status(500).json('Oops, something went wrong');
    console.log(err)
  })
}
const getAll = (req, res, next) => {
  req.app.get('db').read_products()
  .then(products => res.status(200).json(products))
  .catch(err => {
    res.status(500).json('getAll went wrong');
    console.log(err)
  })
}
const getOne = (req, res, next) => {
  req.app.get('db')
}



module.exports = {
  create,
  // getOne,
  getAll,
  // update,
  // deleteOne
}