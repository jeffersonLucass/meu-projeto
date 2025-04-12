"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudantesModule = void 0;
const common_1 = require("@nestjs/common");
const estudantes_service_1 = require("./estudantes.service");
const estudantes_controller_1 = require("./estudantes.controller");
const estudante_entity_1 = require("./entities/estudante.entity");
const typeorm_1 = require("@nestjs/typeorm");
let EstudantesModule = class EstudantesModule {
};
exports.EstudantesModule = EstudantesModule;
exports.EstudantesModule = EstudantesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estudante_entity_1.Estudante])],
        controllers: [estudantes_controller_1.EstudantesController],
        providers: [estudantes_service_1.EstudantesService],
    })
], EstudantesModule);
//# sourceMappingURL=estudantes.module.js.map