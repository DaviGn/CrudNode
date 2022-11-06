"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial1655162152528 = void 0;
class initial1655162152528 {
    name = 'initial1655162152528';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(250) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.initial1655162152528 = initial1655162152528;
