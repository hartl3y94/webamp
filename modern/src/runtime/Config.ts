import MakiObject from "./MakiObject";
import ConfigItem from "./ConfigItem";
import { unimplementedWarning } from "../utils";

class Config extends MakiObject {
  /**
   * getclassname()
   *
   * Returns the class name for the object.
   * @ret The class name.
   */
  getclassname() {
    return "Config";
  }

  newitem(item_name: string, item_guid: string) {
    unimplementedWarning("newitem");
    return new ConfigItem(null, this);
  }

  getitem(item_name: string) {
    unimplementedWarning("getitem");
    return;
  }

  getitembyguid(item_guid: string) {
    unimplementedWarning("getitembyguid");
    return;
  }
}

export default Config;