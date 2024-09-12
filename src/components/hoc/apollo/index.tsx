import { HttpLink, ApolloClient, ApolloLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export const InjectApollo = ( props: PropsWithChildren) => {
    const coreLink = new HttpLink({
        uri: "https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-core-matic/api",
      });
    
      const svgLink = new HttpLink({
        uri: "https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-svg-matic/api",
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