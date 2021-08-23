import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    verbose: true,
    testEnvironment: "node",
    testSequencer: "./__test__/utils/testSequencer.js",
    setupFiles: ["dotenv/config"],
  };
};
