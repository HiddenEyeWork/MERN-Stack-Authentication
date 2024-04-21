import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const ngrok_server_url = 'https://b251-37-120-156-98.ngrok-free.app';

const httpLink = createHttpLink({
    uri: `${ngrok_server_url}/graphql`
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;