/* eslint-disable import/no-extraneous-dependencies */
import { createServer } from 'miragejs';
import { timelineData, skillsData } from '../data';

const server = () => createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 3000;

    this.get('/educations', () => (timelineData));

    this.get('/skills', () => (skillsData));

    this.post('/skills', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      attrs.id = 4;

      return { skill: attrs };
    });
  },
});

export default server;
