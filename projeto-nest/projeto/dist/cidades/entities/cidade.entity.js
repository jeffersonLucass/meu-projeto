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
exports.Cidade = void 0;
const estudante_entity_1 = require("../../estudantes/entities/estudante.entity");
const uf_entity_1 = require("../../ufs/entities/uf.entity");
const typeorm_1 = require("typeorm");
const { nanoid } = require("nanoid");
let Cidade = class Cidade {
    id;
    nome;
    uf;
    estudantes;
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
};
exports.Cidade = Cidade;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Cidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => uf_entity_1.Uf, (uf) => uf.cidades),
    __metadata("design:type", uf_entity_1.Uf)
], Cidade.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estudante_entity_1.Estudante, (estudante) => estudante.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "estudantes", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Cidade.prototype, "generateId", null);
exports.Cidade = Cidade = __decorate([
    (0, typeorm_1.Entity)("cidades")
], Cidade);
//# sourceMappingURL=cidade.entity.js.map