const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);

const routes = express.Router();

//Importando Pastas do App
const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const DashboardController = require('./app/controllers/DashboardController');
const FileController = require('./app/controllers/FileController');
const AppointmentController = require('./app/controllers/AppointmentController');
const AvailableController = require('./app/controllers/AvailableController');

//Importandos mensagens 'success' e 'error' atraves do connect-flash para todas as rotas
routes.use((req, res, next)=> {
    res.locals.flashSuccess = req.flash('success');
    res.locals.flashError = req.flash('error');

    return next();
});

//Rotas da aplicação
routes.get('/file/:file', FileController.show)
routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

//todas a rotas que usar a rota /app/ passara pelo middleware
routes.use('/app', authMiddleware);

routes.get('/app/logout', SessionController.destroy);

routes.get('/app/dashboard', DashboardController.index);

routes.get('/app/appointments/new/:provider', AppointmentController.create);
routes.post('/app/appointments/new/:provider', AppointmentController.store);

routes.get('/app/available/:provider', AvailableController.index);

module.exports = routes;