import type { Meta, StoryObj } from "@storybook/vue3";
import { MCollapse, MCollapseItem } from "samuel-morph";

type Story = StoryObj<typeof MCollapse>;

const meta: Meta<typeof MCollapse> = {
  title: "Example/Collapse",
  component: MCollapse,
  subcomponents: { MCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args: any) => ({
    components: {
      MCollapse,
      MCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <m-collapse v-bind="args">
      <m-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </m-collapse-item>
      <m-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </m-collapse-item>
      <m-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </m-collapse-item>
    </m-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
