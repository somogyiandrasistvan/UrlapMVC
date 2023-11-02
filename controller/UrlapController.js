import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController {
  constructor() {
    const URLAPMODEL = new UrlapModel();
    new UrlapView($(".urlap"), URLAPMODEL.leiro);

  }
}
export default UrlapController;
