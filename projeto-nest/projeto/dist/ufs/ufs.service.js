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
exports.UfsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uf_entity_1 = require("./entities/uf.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UfsService = class UfsService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        const ufs = this.repository.create(dto);
        return this.repository.save(ufs);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, dto) {
        const ufs = await this.repository.findOneBy({ id });
        if (!ufs)
            return null;
        this.repository.merge(ufs, dto);
        return this.repository.save(ufs);
    }
    async remove(id) {
        const ufs = await this.repository.findOneBy({ id });
        if (!ufs)
            return null;
        return this.repository.remove(ufs);
    }
};
exports.UfsService = UfsService;
exports.UfsService = UfsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(uf_entity_1.Uf)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UfsService);
//# sourceMappingURL=ufs.service.js.map