"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatingUsersRole1655334983591 = void 0;
class updatingUsersRole1655334983591 {
    async up(queryRunner) {
        await queryRunner.query(`update "users" set roleid = '5be3f402-0c14-4ece-90a1-121bebae2a00' where roleid is null`);
    }
    async down(queryRunner) {
        await queryRunner.query(`update "users" set roleid = null where roleid = '5be3f402-0c14-4ece-90a1-121bebae2a00'`);
    }
}
exports.updatingUsersRole1655334983591 = updatingUsersRole1655334983591;
