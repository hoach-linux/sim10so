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
    const lastElement = parameters.keyword.length - 1;

    if (parameters.keyword[0] === "*") {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"number":{"_ends_with":"${parameters.keyword.slice(
          1
        )}"}}`
      );
    } else if (parameters.keyword[parameters.keyword.length - 1] === "*") {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"number":{"_starts_with":"${parameters.keyword.slice(
          0,
          parameters.keyword.length - 1
        )}"}}`
      );
    } else if (
      parameters.keyword[0] !== "*" &&
      parameters.keyword[parameters.keyword.length - 1] !== "*" &&
      parameters.keyword.includes("*")
    ) {
      const parametersIndex = parameters.keyword.indexOf("*");

      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list`,
        {
          params: {
            filter: {
              _and: [
                {
                  number: {
                    _starts_with: parameters.keyword.slice(0, parametersIndex),
                  },
                },
                {
                  number: {
                    _ends_with: parameters.keyword.slice(
                      parametersIndex + 1,
                      lastElement + 1
                    ),
                  },
                },
              ],
            },
          },
        }
      );
    } else {
      sim = await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list`,
        {
          params: {
            filter: {
              number: {
                _contains: parameters.keyword,
              },
            },
          },
        }
      );
    }
    return sim.data;
  }
  static async getSimFilterPrice(filter: any, page: number) {
    let sim: any;
    let arr4: any[] = [
      "1111",
      "2222",
      "3333",
      "4444",
      "5555",
      "6666",
      "7777",
      "8888",
      "9999",
      "0000",
    ];
    let arr5: any[] = [
      "11111",
      "22222",
      "33333",
      "44444",
      "55555",
      "66666",
      "77777",
      "88888",
      "99999",
      "00000",
    ];
    let arr6: any[] = [
      "111111",
      "222222",
      "333333",
      "444444",
      "555555",
      "666666",
      "777777",
      "888888",
      "999999",
      "000000",
    ];

    async function fetchingSim(parameters: any) {
      return await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?filter={"${parameters.items}":{"${parameters.method}":"${parameters.parameter}"}}`,
        {
          params: {
            limit: 24,
            page: page,
            meta: "filter_count",
          },
        }
      );
    }
    async function fetchingSimWithParameters(parameters: any) {
      return await axios.get(
        `https://directus.hoach.skryonline.com/items/sim_list?${parameters}`,
        {
          params: {
            limit: 24,
            page: page,
            meta: "filter_count",
          },
        }
      );
    }

    if (filter === "Sim dưới 500k") {
      sim = await fetchingSim({
        items: "price",
        method: "_lte",
        parameter: "500000",
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
    } else if (filter === "Sim Viettel") {
      sim = await fetchingSim({
        items: "provider",
        method: "_eq",
        parameter: "Viettel",
      });
    } else if (filter === "Sim Mobifone") {
      sim = await fetchingSim({
        items: "provider",
        method: "_eq",
        parameter: "Mobifone",
      });
    } else if (filter === "Sim Vinaphone") {
      sim = await fetchingSim({
        items: "provider",
        method: "_eq",
        parameter: "Vinaphone",
      });
    } else if (filter === "Sim Gmobile") {
      sim = await fetchingSim({
        items: "provider",
        method: "_eq",
        parameter: "Gmobile",
      });
    } else if (filter === "Sim Vietnamobile") {
      sim = await fetchingSim({
        items: "provider",
        method: "_eq",
        parameter: "Vietnamobile",
      });
    } else if (filter === "Sim Lục Quý") {
      let newArr: object[] = [];
      sim = await fetchingSimWithParameters(
        'filter={"_or":[{"number":{"_contains":"111111"}},{"number":{"_contains":"222222"}},{"number":{"_contains":"333333"}},{"number":{"_contains":"444444"}},{"number":{"_contains":"555555"}},{"number":{"_contains":"666666"}},{"number":{"_contains":"777777"}},{"number":{"_contains":"888888"}},{"number":{"_contains":"999999"}}]}'
      );
      sim.data.data = newArr.concat(
        ...arr6.map((numberItem) => {
          return sim.data.data.filter((item: any) => {
            const index = item.number.indexOf(numberItem);

            if (
              item.number[index + 6] !== item.number[index] &&
              item.number[index - 1] !== item.number[index]
            ) {
              return item.number;
            }
          });
        })
      );
    } else if (filter === "Sim Ngũ Quý") {
      let newArr: object[] = [];

      sim = await fetchingSimWithParameters(
        'filter={"_or":[{"number":{"_contains":"11111"}},{"number":{"_contains":"22222"}},{"number":{"_contains":"33333"}},{"number":{"_contains":"44444"}},{"number":{"_contains":"55555"}},{"number":{"_contains":"66666"}},{"number":{"_contains":"77777"}},{"number":{"_contains":"88888"}},{"number":{"_contains":"99999"}}]}'
      );

      sim.data.data = newArr.concat(
        ...arr5.map((numberItem) => {
          return sim.data.data.filter((item: any) => {
            const index = item.number.indexOf(numberItem);

            if (
              item.number[index + 5] !== item.number[index] &&
              item.number[index - 1] !== item.number[index]
            ) {
              return item.number;
            }
          });
        })
      );
    } else if (filter === "Sim Tứ Quý") {
      let newArr: object[] = [];

      sim = await fetchingSimWithParameters(
        'filter={"_or":[{"number":{"_contains":"1111"}},{"number":{"_contains":"2222"}},{"number":{"_contains":"3333"}},{"number":{"_contains":"4444"}},{"number":{"_contains":"5555"}},{"number":{"_contains":"6666"}},{"number":{"_contains":"7777"}},{"number":{"_contains":"8888"}},{"number":{"_contains":"9999"}}]}'
      );
      sim.data.data = newArr.concat(
        ...arr4.map((numberItem) => {
          return sim.data.data.filter((item: any) => {
            const index = item.number.indexOf(numberItem);

            if (
              item.number[index + 4] !== item.number[index] &&
              item.number[index - 1] !== item.number[index]
            ) {
              return item.number;
            }
          });
        })
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
