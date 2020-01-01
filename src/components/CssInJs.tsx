import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";

import styled from "styled-components";

const Msg = styled.div`
  color: green;
`;

export default tsx.component({
  name: "CssInJs",
  data() {
    return {
      msg: "HelloWorld(CssInJs)"
    };
  },
  render(h: CreateElement): VNode {
    return (
      <div>
        <Msg>{this.msg}</Msg>
      </div>
    );
  }
});
