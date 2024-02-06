/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("final_table").del();
  await knex("final_table").insert([
    { description: "what now" },
    { description: "fix that" },
    { description: "number 3" },
  ]);
};
