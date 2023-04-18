-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/n2yNcq
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "monster_stats" (
    "name" varchar   NOT NULL,
    "url" varchar   NOT NULL,
    "challenge_rating" int   NOT NULL,
    "creature_type" varchar   NOT NULL,
    "creature_size" varchar   NOT NULL,
    "armor_class" int   NOT NULL,
    "hit_points" int   NOT NULL,
    "charisma" int   NOT NULL,
    "wisdom" int   NOT NULL,
    "intelligence" int   NOT NULL,
    "constitution" int   NOT NULL,
    "dexterity" int   NOT NULL,
    "strength" int   NOT NULL,
    "swim" varchar   NOT NULL,
    "fly" varchar   NOT NULL,
    "legendary" varchar   NOT NULL,
    CONSTRAINT "pk_monster_stats" PRIMARY KEY (
        "name"
     )
);

CREATE TABLE "challenge_table" (
    "challenge_rating" int   NOT NULL,
    "number_of_players" int   NOT NULL,
    "average_level" int   NOT NULL
);

ALTER TABLE "challenge_table" ADD CONSTRAINT "fk_challenge_table_challenge_rating" FOREIGN KEY("challenge_rating")
REFERENCES "monster_stats" ("challenge_rating");

