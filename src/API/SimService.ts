import axios from "axios";

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
  static async getSimBySearch(keyword: string) {
    const sim = await axios.get(
      `https://directus.hoach.skryonline.com/items/sim_list?search=${keyword}`
    );
    return sim.data;
  }
}
