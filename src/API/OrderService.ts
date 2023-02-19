import axios from "axios";

export default class OrderService {
  static async getOrder(limit: number, page: number) {
    const order = await axios.get(
      `https://directus.hoach.skryonline.com/items/sim_order`,
      {
        params: {
          limit: limit,
          page: page,
        },
      }
    );
    return order.data;
  }
}
