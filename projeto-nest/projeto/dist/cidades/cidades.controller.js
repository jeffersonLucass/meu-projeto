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
exports.CidadesController = void 0;
const common_1 = require("@nestjs/common");
const cidades_service_1 = require("./cidades.service");
const create_cidade_dto_1 = require("./dto/create-cidade.dto");
const update_cidade_dto_1 = require("./dto/update-cidade.dto");
let CidadesController = class CidadesController {
    cidadesService;
    constructor(cidadesService) {
        this.cidadesService = cidadesService;
    }
    create(createCidadeDto) {
        return this.cidadesService.create(createCidadeDto);
    }
    findAll() {
        return this.cidadesService.findAll();
    }
    async findOne(id) {
        const cidade = await this.cidadesService.findOne(id);
        if (!cidade)
            throw new common_1.NotFoundException();
        return cidade;
    }
    async update(id, updateCidadeDto) {
        const cidade = await this.cidadesService.update(id, updateCidadeDto);
        if (!cidade)
            throw new common_1.NotFoundException();
        return cidade;
    }
    async remove(id) {
        const cidade = await this.cidadesService.remove(id);
        if (!cidade)
            throw new common_1.NotFoundException();
    }
};
exports.CidadesController = CidadesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cidade_dto_1.CreateCidadeDto]),
    __metadata("design:returntype", void 0)
], CidadesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CidadesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cidade_dto_1.UpdateCidadeDto]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "remove", null);
exports.CidadesController = CidadesController = __decorate([
    (0, common_1.Controller)('cidades'),
    __metadata("design:paramtypes", [cidades_service_1.CidadesService])
], CidadesController);
//# sourceMappingURL=cidades.controller.js.map