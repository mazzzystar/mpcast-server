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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
const patch_entity_1 = require("../helpers/utils/patch-entity");
let UserService = class UserService {
    constructor(connection) {
        this.connection = connection;
    }
    create(newUser) {
        return this.connection.getRepository(entity_1.User).save(newUser).then(user => {
            return user;
        });
    }
    async createOrUpdate(input) {
        let user;
        const existing = await this.connection.getRepository(entity_1.User).findOne({
            where: {
                identifier: input.identifier,
            },
        });
        if (existing) {
            user = patch_entity_1.patchEntity(existing, input);
        }
        else {
            user = new entity_1.User(input);
        }
        return this.connection.getRepository(entity_1.User).save(user);
    }
    async updateUser(user) {
        return await this.connection.getRepository(entity_1.User).save(user);
    }
    getDetailById(id) {
        return this.connection.getRepository(entity_1.User).findOne({
            relations: ['metas'],
            where: {
                id,
            },
        });
    }
    getUsersDetailByIds(ids) {
        return this.connection.getRepository(entity_1.User).findByIds(ids);
    }
    findByIdentifier(identifier) {
        return this.connection.getRepository(entity_1.User).findOne({
            relations: ['metas'],
            where: {
                identifier,
            },
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectConnection()),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map