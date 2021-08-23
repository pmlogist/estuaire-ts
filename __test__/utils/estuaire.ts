import { Estuaire } from "../../src";

const estuaire = new Estuaire({
  vk: {
    serviceToken: process.env.VK_SERVICE_TOKEN,
  },
});

export const vk = estuaire.vk;
