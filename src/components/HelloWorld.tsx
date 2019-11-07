import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";

export default tsx.component({
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld"
    };
  },
  methods: {
    handleHoverEvent() {
      if (this.msg === "HelloWorld") this.msg = "HelloVueTSX";
      else this.msg = "HelloWorld";
    }
  },
  render(h: CreateElement): VNode {
    return (
      <div
        onmouseenter={this.handleHoverEvent}
        onmouseleave={this.handleHoverEvent}
      >
        {this.msg}
      </div>
    );
  }
});
