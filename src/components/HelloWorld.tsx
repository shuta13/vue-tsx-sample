import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";

import "./HelloWorld.scss"

export default tsx.component({
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld"
    };
  },
  render(h: CreateElement): VNode {
    return (
      <div class="msg">
        {this.msg}
      </div>
    );
  }
});
