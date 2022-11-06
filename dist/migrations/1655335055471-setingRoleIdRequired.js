"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setingRoleIdRequired1655335055471 = void 0;
class setingRoleIdRequired1655335055471 {
    name = 'setingRoleIdRequired1655335055471';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "roleid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c" FOREIGN KEY ("roleid") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "roleid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_fda64da5f551e18c5e7d7bbde7c" FOREIGN KEY ("roleid") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.setingRoleIdRequired1655335055471 = setingRoleIdRequired1655335055471;
