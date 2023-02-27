import axios from "axios";

interface ISearch {
  limit?: number;
  page?: number;
  keyword: string;
}
export default class SimService {
  static async getSim(limit: number, page: number) {
    const sim = await axios.get(
      `https://directus.hoach.skryonline.com/items/sim_list`,
      {
        params: {
          limit: limit,
          page: page,
        },
      }
    );
    return sim.data;
  }
  static async getSimByProvider(limit: number, page: number, provider: string) {
    const sim = await axios.get(
      `https://directus.hoach.skryonline.com/items/sim_list?filter={"provider":"${provider}"}`,
      {
        params: {
          limit: limit,
          page: page,
        },
      }
    );
    return sim.data;
  }
  static async getSimBySearch(parameters: ISearch) {
    let sim: any;

    if (parameters.limit && parameters.page && parameters.keyword) {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"number":{"_contains":"${parameters.keyword}"}}`,
        {
          params: {
            limit: parameters.limit,
            page: parameters.page,
          },
        }
      );
    } else {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"number":{"_contains":"${parameters.keyword}"}}`
      );
    }
    return sim.data;
  }
  static async postSimOrder(simOrder: object) {
    await axios.post(
      "https://directus.hoach.skryonline.com/items/sim_order",
      simOrder
    );
  }
}
