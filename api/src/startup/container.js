const { createContainer, asClass, asValue, asFunction } = require('awilix');

const config = require('../config');
const app = require('./index');

// importar servicios
const { HomeService, UserService, BebidaService, LocalidadService, ComboService, ClienteService } = require('../services');

// importar controladores
const { HomeController, UserController, BebidaController, LocalidadController, ComboController, ClienteController } = require('../controllers');

// importar rutas
const Routes = require('../routes')
const { HomeRoutes, UserRoutes, BebidaRoutes, LocalidadRoutes, ComboRoutes, ClienteRoutes } = require('../routes/index.routes');

// models
const { UserModel, BebidaModel, LocalidadModel, ComboModel, ClienteModel} = require('../models');

// repositorios
const { UserRepository, BebidaRepository, LocalidadRepository, ComboRepository, ClienteRepository } = require('../repositories');


const container = createContainer();
container
    .register(
        {
            app: asClass(app),
            router: asFunction(Routes).singleton(),
            config: asValue(config)
        }
    )
    .register(
        {
            HomeService: asClass(HomeService).singleton(),
            UserService: asClass(UserService).singleton(),
            BebidaService: asClass(BebidaService).singleton(),
            LocalidadService: asClass(LocalidadService).singleton(),
            ComboService: asClass(ComboService).singleton(),
            ClienteService: asClass(ClienteService).singleton()
        }
    ).register(
        {
            HomeController: asClass(HomeController.bind(HomeController)).singleton(),
            UserController: asClass(UserController.bind(UserController)).singleton(),
            BebidaController: asClass(BebidaController.bind(BebidaController)).singleton(),
            LocalidadController: asClass(LocalidadController.bind(LocalidadController)).singleton(),
            ComboController: asClass(ComboController.bind(ComboController)).singleton(),
            ClienteController: asClass(ClienteController.bind(ClienteController)).singleton()
        }
    ).register(
        {
            HomeRoutes: asFunction(HomeRoutes).singleton(),
            UserRoutes: asFunction(UserRoutes).singleton(),
            BebidaRoutes: asFunction(BebidaRoutes).singleton(),
            LocalidadRoutes: asFunction(LocalidadRoutes).singleton(),
            ComboRoutes: asFunction(ComboRoutes).singleton(),
            ClienteRoutes: asFunction(ClienteRoutes).singleton()
        }
    ).register(
        {
            User: asValue(UserModel),
            Bebida: asValue(BebidaModel),
            Localidad: asValue(LocalidadModel),
            Combo: asValue(ComboModel),
            Cliente: asValue(ClienteModel)
        }
    ).register(
        {
            UserRepository: asClass(UserRepository).singleton(),
            BebidaRepository: asClass(BebidaRepository).singleton(),
            LocalidadRepository: asClass(LocalidadRepository).singleton(),
            ComboRepository: asClass(ComboRepository).singleton(),
            ClienteRepository: asClass(ClienteRepository).singleton()
        }
    )


module.exports = container;