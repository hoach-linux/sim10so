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

    async function fetchingSim(parameters: any) {
      return await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"${parameters.items}":{"${parameters.method}":"${parameters.parameter}"}}`,
        {
          params: {
            limit: 24,
            page: 1,
          },
        }
      );
    }

    if (filter === "Sim dưới 500k") {
      sim = await fetchingSim({
        items: "price",
        method: "_lte",
        parameter: "2500000",
      });
    } else if (filter === "Sim trên 500 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_gte",
        parameter: "500000000",
      });
    } else if (filter === "Sim 1 - 3 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "1000000, 3000000",
      });
    } else if (filter === "Sim 3 - 5 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "3000000, 5000000",
      });
    } else if (filter === "Sim 5 - 10 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "5000000, 10000000",
      });
    } else if (filter === "Sim 10 - 20 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "10000000, 20000000",
      });
    } else if (filter === "Sim 20 - 50 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "20000000, 50000000",
      });
    } else if (filter === "Sim 50 - 100 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "50000000, 100000000",
      });
    } else if (filter === "Sim 100 - 200 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "100000000, 200000000",
      });
    } else if (filter === "Sim 200 - 500 triệu") {
      sim = await fetchingSim({
        items: "price",
        method: "_between",
        parameter: "200000000, 500000000",
      });
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
