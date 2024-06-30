import type { StoryObj, Meta, ArgTypes } from "@storybook/vue3";
import { ref, watch } from "vue";
import { fn } from "@storybook/test";
import { MAlert, type AlertInstance } from "samuel-morph";

type Story = StoryObj<typeof MAlert> & { argTypes?: ArgTypes };

const meta: Meta<typeof MAlert> = {
  title: "Example/Alert",
  component: MAlert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "warning", "info", "danger"],
    },
    effect: {
      control: "select",
      options: ["light", "dark"],
    },
    center: {
      control: "boolean",
    },
  },
  args: {
    onClose: fn(),
  },
};

export const Default: Story & { args: { visible: boolean } } = {
  args: {
    title: "标题",
    description: "这是一段描述",
    type: "success",
    effect: "light",
    closable: true,
    showIcon: true,
    visible: true,
  },
  render: (args) => ({
    components: { MAlert },
    setup() {
      const alertRef = ref<AlertInstance>();
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open();
          } else {
            alertRef.value?.close();
          }
        }
      );
      return { args, alertRef };
    },
    template: `
     <m-alert ref="alertRef" v-bind="args"></m-alert>
    `,
  }),
};

export default meta;
