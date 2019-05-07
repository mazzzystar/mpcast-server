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
var Comment_1;
"use strict";
const typeorm_1 = require("typeorm");
const __1 = require("..");
const base_entity_1 = require("../base.entity");
const comment_meta_entity_1 = require("./comment-meta.entity");
let Comment = Comment_1 = class Comment extends base_entity_1.BaseEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 20,
        default: 'approved',
        comment: '内容状态',
    }),
    __metadata("design:type", String)
], Comment.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column('text', {
        comment: '留言内容',
    }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        comment: 'IP 地址',
    }),
    __metadata("design:type", String)
], Comment.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Comment.prototype, "commentCount", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_meta_entity_1.CommentMeta, commentMeta => commentMeta.replay, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comment.prototype, "metas", void 0);
__decorate([
    typeorm_1.OneToMany(type => Comment_1, comment => comment.relay),
    __metadata("design:type", Comment)
], Comment.prototype, "reference", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Comment_1, comment => comment.reference),
    __metadata("design:type", Comment)
], Comment.prototype, "relay", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.User, guest => guest.comments),
    __metadata("design:type", __1.User)
], Comment.prototype, "author", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.Post, post => post.comments, {}),
    __metadata("design:type", __1.Post)
], Comment.prototype, "post", void 0);
Comment = Comment_1 = __decorate([
    typeorm_1.Entity('comment'),
    __metadata("design:paramtypes", [Object])
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map