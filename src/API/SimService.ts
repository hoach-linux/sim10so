import axios from "axios";

export default class SimService {
  static async getSim(limit: number, page: number) {
    const sim = await axios.get(
      "https://directus.hoach.skryonline.com/items/sim_list",
      {
        params: {
          limit: limit,
          page: page,
        },
      }
    );
    return sim.data;
  }
}
