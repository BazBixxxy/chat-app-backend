import { Schema, model } from "mongoose";

const TestSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const TestUser = model("Test", TestSchema);

export default TestUser;
