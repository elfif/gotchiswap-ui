import { HttpLink, ApolloClient, ApolloLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export const InjectApollo = ( props: PropsWithChildren) => {
    const coreLink = new HttpLink({
        uri: "https://api.goldsky.com/api/public/project_cmh3flagm0001r4p25foufjtt/subgraphs/aavegotchi-core-base/prod/gn",
      });
    
      const svgLink = new HttpLink({
        uri: "https://api.goldsky.com/api/public/project_cmh3flagm0001r4p25foufjtt/subgraphs/aavegotchi-svg-base/prod/gn",
      });
    
      const client = new ApolloClient({
        link: ApolloLink.split(
          (operation) => operation.getContext().clientName === "core",
          coreLink,
          svgLink
        ),
        cache: new InMemoryCache(),
      });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
