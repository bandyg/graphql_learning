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
export default config;
