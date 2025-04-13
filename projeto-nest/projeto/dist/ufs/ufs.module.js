"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UfsModule = void 0;
const common_1 = require("@nestjs/common");
const ufs_service_1 = require("./ufs.service");
const ufs_controller_1 = require("./ufs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const uf_entity_1 = require("./entities/uf.entity");
let UfsModule = class UfsModule {
};
exports.UfsModule = UfsModule;
exports.UfsModule = UfsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([uf_entity_1.Uf])],
        controllers: [ufs_controller_1.UfsController],
        providers: [ufs_service_1.UfsService],
    })
], UfsModule);
//# sourceMappingURL=ufs.module.js.map