// Neon serverless driver is a low-latency Postgres driver for JavaScript (and TypeScript) 
import { neon } from '@neondatabase/serverless';
// Drizzle driver adapter. This adapter allows you to choose a different database driver than Drizzle's default driver for communicating with your database.
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './schema'

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle({client: sql, casing: 'snake_case', schema }) 