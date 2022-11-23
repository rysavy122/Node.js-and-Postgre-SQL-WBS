import pkg from 'pg';
const { Pool } = pkg;

const myConnectionString = 'postgres://rnyrpojf:RJG2gbdX532wYiYoUWWcDPcxAdnvD5x8@peanut.db.elephantsql.com/rnyrpojf'

export const pool = new Pool(
{
    connectionString: myConnectionString
}
);

