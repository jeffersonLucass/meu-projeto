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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uf = void 0;
const typeorm_1 = require("typeorm");
const cidade_entity_1 = require("../../cidades/entities/cidade.entity");
const { nanoid } = require("nanoid");
let Uf = class Uf {
    id;
    nome;
    sigla;
    cidades;
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
};
exports.Uf = Uf;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Uf.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Uf.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Uf.prototype, "sigla", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cidade_entity_1.Cidade, (cidade) => cidade.uf),
    __metadata("design:type", Array)
], Uf.prototype, "cidades", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Uf.prototype, "generateId", null);
exports.Uf = Uf = __decorate([
    (0, typeorm_1.Entity)('Ufs')
], Uf);
//# sourceMappingURL=uf.entity.js.map