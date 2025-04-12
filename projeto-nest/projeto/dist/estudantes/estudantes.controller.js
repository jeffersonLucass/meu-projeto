"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudantesController = void 0;
const common_1 = require("@nestjs/common");
const estudantes_service_1 = require("./estudantes.service");
const create_estudante_dto_1 = require("./dto/create-estudante.dto");
const update_estudante_dto_1 = require("./dto/update-estudante.dto");
let EstudantesController = class EstudantesController {
    estudantesService;
    constructor(estudantesService) {
        this.estudantesService = estudantesService;
    }
    create(createEstudanteDto) {
        return this.estudantesService.create(createEstudanteDto);
    }
    findAll() {
        return this.estudantesService.findAll();
    }
    async findOne(id) {
        const estudante = await this.estudantesService.findOne(id);
        if (!estudante)
            throw new common_1.NotFoundException();
        return estudante;
    }
    async update(id, updateEstudanteDto) {
        const estudante = await this.estudantesService.update(id, updateEstudanteDto);
        if (!estudante)
            throw new common_1.NotFoundException();
        return estudante;
    }
    async remove(id) {
        const estudante = await this.estudantesService.remove(id);
        if (!estudante)
            throw new common_1.NotFoundException();
    }
};
exports.EstudantesController = EstudantesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudante_dto_1.CreateEstudanteDto]),
    __metadata("design:returntype", void 0)
], EstudantesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstudantesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstudantesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estudante_dto_1.UpdateEstudanteDto]),
    __metadata("design:returntype", Promise)
], EstudantesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstudantesController.prototype, "remove", null);
exports.EstudantesController = EstudantesController = __decorate([
    (0, common_1.Controller)('estudantes'),
    __metadata("design:paramtypes", [estudantes_service_1.EstudantesService])
], EstudantesController);
//# sourceMappingURL=estudantes.controller.js.map