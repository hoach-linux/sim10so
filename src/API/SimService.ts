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
  static async getSimFilterPrice(filter: any) {
    let sim: any;

    if (filter === "Sim dưới 500k") {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"price":{"_lte":"500000"}}`
      );
    } else if (filter === "Sim 1 - 3 triệu") {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"price":{"_starts_with":"1000000"}, "price":{"_ends_with":"3000000"}}`
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
