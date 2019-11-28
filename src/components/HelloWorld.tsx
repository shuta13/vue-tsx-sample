import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";

import "./HelloWorld.scss"

export default tsx.component({
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld",
      isActive: false
    };
  },
  render(h: CreateElement): VNode {
    let className = null;
    if (this.isActive) { className = "msg" }
    return (
      <div>
        <div class={className}>
          {this.msg}
        </div>
        <button onClick={() => this.isActive = !this.isActive}>
          toggle
        </button>
      </div>
    );
  }
});
