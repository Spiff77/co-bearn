const ApiGatewayService = require('moleculer-web');
// const { OidcConnector } = require('@semapps/connector');
const { MIME_TYPES } = require('@semapps/mime-types');
const path = require('path');
const urlJoin = require('url-join');
const {
  Routes: SparqlEndpointRoutes
} = require('@semapps/sparql-endpoint');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    cors: {
      origin: '*',
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
      exposedHeaders: '*'
    }
  },
};
