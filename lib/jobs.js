import sql from "better-sqlite3";

const db = sql(joblist.db);

export default async function getJobsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const jobs = db.prepare("SELECT * FROM jobs").all();
  return jobs;
}
