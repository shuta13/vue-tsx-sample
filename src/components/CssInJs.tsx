import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";

import addStyleRules from "./modules/addStyleRules";

const styles = {
  msg: {
    color: "rgb(59, 165, 119)",
    animation: "horizontal 1.2s ease-in-out infinite alternate"
  }
};

export default tsx.component({
  name: "CssInJs",
  data() {
    return {
      msg: "HelloWorld(CssInJs)",
      horizontalFrame: `
        @keyframes horizontal {
          0% {
            transform:translateX(-8px);
          }
          100% {
            transform:translateX(8px);
          }
        }
      `
    };
  },
  mounted() {
    addStyleRules(this.horizontalFrame);
  },
  render(h: CreateElement): VNode {
    return (
      <div>
        {/* <div class={className}> */}
        <div style={styles.msg}>{this.msg}</div>
      </div>
    );
  }
});
