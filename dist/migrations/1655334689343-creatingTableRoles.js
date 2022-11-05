"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatingTableRoles1655334689343 = void 0;
class creatingTableRoles1655334689343 {
    constructor() {
        this.name = 'creatingTableRoles1655334689343';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "roleid" uuid`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c" FOREIGN KEY ("roleid") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roleid"`);
            yield queryRunner.query(`DROP TABLE "roles"`);
        });
    }
}
exports.creatingTableRoles1655334689343 = creatingTableRoles1655334689343;
