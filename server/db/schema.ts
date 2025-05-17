import { sql } from 'drizzle-orm';
import {
    pgTable,
    integer,
    serial,
    timestamp,
    varchar,
    index,
} from 'drizzle-orm/pg-core';
import * as t from "drizzle-orm/pg-core";


// columns.helpers.ts
// const timestamps = {
//   updated_at: timestamp(),
//   created_at: timestamp().defaultNow().notNull(),
//   deleted_at: timestamp(),
// }

export const images = pgTable('images', 
    {
        id: t.integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
        name: varchar('name', {length: 256}).notNull(),
        url: varchar({ length: 1024 }).notNull(),
        createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
        updatedAt: timestamp('updated_at'),
    },
    (table) => [
        t.index('name_idx').on(table.name)    
    ]
)