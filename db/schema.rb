# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140330033153) do

  create_table "collections", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "raw_tweets", force: true do |t|
    t.text     "raw"
    t.integer  "tweet_guid", limit: 8
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tweets", force: true do |t|
    t.string   "tweet_text"
    t.datetime "tweet_created_at"
    t.integer  "tweet_guid",       limit: 8
    t.string   "tweet_source"
    t.integer  "user_id"
    t.integer  "collection_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "screen_name"
    t.integer  "user_guid",                    limit: 8
    t.string   "profile_background_colour"
    t.string   "profile_background_image_url"
    t.integer  "collection_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
