import { Database } from "../rewrite/database.ts";
import { bench, run } from "https://esm.sh/mitata";

const db = new Database("./bench/northwind.sqlite");

{
  const sql = db.prepare(`SELECT * FROM "Order"`);
  bench('SELECT * FROM "Order"', () => {
    sql.all();
  });
  bench('SELECT * FROM "Order"', () => {
    sql.values();
  });
}

{
  const sql = db.prepare(`SELECT * FROM "Product"`);
  bench('SELECT * FROM "Product"', () => {
    sql.all();
  });
  bench('SELECT * FROM "Order"', () => {
    sql.values();
  });
}

{
  const sql = db.prepare(`SELECT * FROM "OrderDetail"`);
  bench('SELECT * FROM "OrderDetail"', () => {
    sql.all();
  });
  bench('SELECT * FROM "Order"', () => {
    sql.values();
  });
}

await run();