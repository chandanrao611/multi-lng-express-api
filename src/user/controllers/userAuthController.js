module.exports = {
    login: (req, res, next) => {
        res.status(200).send(res.__('SUCCESS'));
    }
}