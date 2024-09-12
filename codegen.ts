
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        "src/graphql/core/__generated__/types.ts": {
            schema: "https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-core-matic/api",
            documents: ["src/graphql/core/queries/*.ts", "src/graphql/core/fragments/*.ts"],
            // preset: 'client'
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true,
                withResultType: true,
            }
        },
        "src/graphql/svg/__generated__/types.ts": {
            schema: "https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-svg-matic/api",
            documents: ["src/graphql/svg/queries/*.ts", "src/graphql/svg/fragments/*.ts"],
            // preset: 'client'
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true,
                withResultType: true,
            }
        },
    }
};

export default config;
