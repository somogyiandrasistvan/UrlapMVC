import { urlapLeiro } from "./urlapleiro.js";
class UrlapModel {
  #leiro = {};
  constructor() {
    this.#leiro = urlapLeiro;
  }

  /*
  getLeiro(){
    return {...this.#leiro};
  }
  */

  get leiro() {
    return { ...this.#leiro };
  }
}
export default UrlapModel;
