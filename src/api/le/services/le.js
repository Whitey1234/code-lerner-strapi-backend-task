'use strict';

/**
 * le service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::le.le');
