"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: './schema.gql',
    generates: {
        './resolvers-types.ts': {
            config: {
                useIndexSignature: true,
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
exports.default = config;
