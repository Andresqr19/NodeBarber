const {User} = require('../models')

class DashboardController {
    async index(req, res) {
        const providers = await User.findAll({where: {provider : 1}});

        return res.render('auth/dashboard', {providers});
    }
}

module.exports = new DashboardController();