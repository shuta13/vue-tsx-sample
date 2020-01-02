import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";
import React from "react";

import { css } from "emotion";

export default tsx.component({
  name: "CssInJs",
  data() {
    return {
      msg: "HelloWorld(CssInJs)",
      msgRef: React.createRef()
    };
  },
  render(h: CreateElement): VNode {
    const msg = css`
      color: green;
    `;
    const node = this.msgRef.current
    node === null
      ? console.log('WTF')
      : node.classList.add(msg)
    return (
      <div>
        <div ref={this.msgRef}>{this.msg}</div>
      </div>
    );
  }
});
