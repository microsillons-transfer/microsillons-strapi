const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "db.vimehvwrkselgisjtigd.supabase.co"),
        port: env("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "postgres"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "MicrosillonsTransferMdp31!"),
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
    debug: false,
  },
});
