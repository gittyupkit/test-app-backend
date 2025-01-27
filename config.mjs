import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables

export default {
  ISSUER_URL: process.env.ISSUER_URL || 'https://stg-id.singpass.gov.sg',
  CLIENT_ID: process.env.CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI || 'https://kits-web-app.netlify.app/redirect',
  SCOPES: process.env.SCOPES || 'openid uinfin name',

  keys: {
    PRIVATE_ENC_KEY: {
      kty: 'EC',
      d: 'E4A4pLCwo_0rTDLIpr8u4A1YgZLUZega3oWjhOhySmw',
      crv: 'P-256',
      kid: 'my-enc-key',
      x: 'Sd05ARH03FJQpcMJDCOhC3rV5XE0w9opxa4srrW7oCo',
      y: 'LyEmzI1Wk7ryGFs1XKv81qwuDEUh689rUxt11oMX0Zs',
      alg: 'ECDH-ES+A256KW',
    },

    PRIVATE_SIG_KEY: {
      kty: 'EC',
      d: 'bGdifu0vqaFptYSdaelldPMh9b7jIIJDP4QYH0KeigY',
      crv: 'P-256',
      kid: 'my-sig-key',
      x: 'GOL8_olXjQ6TN5gP9RMZtxPpyAbdnvMLWBSpgqzQgKw',
      y: '-1JWFaxqtXAigmLrrrEsM6ZzvizKdi0G7-kdyfPI_VQ',
      alg: 'ES256',
    },

    PUBLIC_ENC_KEY: {
      kty: 'EC',
      use: 'enc',
      crv: 'P-256',
      kid: 'my-enc-key',
      x: 'Sd05ARH03FJQpcMJDCOhC3rV5XE0w9opxa4srrW7oCo',
      y: 'LyEmzI1Wk7ryGFs1XKv81qwuDEUh689rUxt11oMX0Zs',
      alg: 'ECDH-ES+A256KW',
    },

    PUBLIC_SIG_KEY: {
      kty: 'EC',
      use: 'sig',
      crv: 'P-256',
      kid: 'my-sig-key',
      x: 'GOL8_olXjQ6TN5gP9RMZtxPpyAbdnvMLWBSpgqzQgKw',
      y: '-1JWFaxqtXAigmLrrrEsM6ZzvizKdi0G7-kdyfPI_VQ',
      alg: 'ES256',
    },
  },

  validateConfig: () => {
    if (!process.env.CLIENT_ID) throw new Error('CLIENT_ID is missing');
    if (!process.env.PRIVATE_SIG_KEY || !process.env.PRIVATE_ENC_KEY) {
      throw new Error('Private keys are missing in environment variables');
    }
  },
};
