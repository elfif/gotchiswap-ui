
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        "src/graphql/core/__generated__/types.ts": {
            schema: "https://api.goldsky.com/api/public/project_cmh3flagm0001r4p25foufjtt/subgraphs/aavegotchi-core-base/prod/gn",
            documents: ["src/graphql/core/queries/*.ts", "src/graphql/core/fragments/*.ts"],
            // preset: 'client'
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true,
                withResultType: true,
            }
        },
        "src/graphql/svg/__generated__/types.ts": {
            schema: "https://api.goldsky.com/api/public/project_cmh3flagm0001r4p25foufjtt/subgraphs/aavegotchi-svg-base/prod/gn",
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
