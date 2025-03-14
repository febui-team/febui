import { FebProps } from "./component";

export type CheckboxState = "checked" | "none" | "indeterminate";

export type CheckboxProps = FebProps<{
  checkAll?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  readonly?: boolean;
  value?: string | number | boolean;
  name?: string;
  title?: string;
  onClick?: (
    value: CheckboxValue | CheckboxState,
    context: {
      e: React.SyntheticEvent;
    }
  ) => void;
  onChange?: (
    state: CheckboxState,
    context: {
      value: CheckboxProps;
      e: React.SyntheticEvent;
    }
  ) => void;
}>;

export type CheckboxGroupPops = FebProps<{
  disabled?: boolean;
  name?: string;
  max?: number;
  options?: CheckboxOptions;
  value?: CheckboxValue[];
  defaultValue?: CheckboxValue[];
  onChange?: (
    value: CheckboxValue[],
    context: {
      current: CheckboxProps;
      state: CheckboxState;
    }
  ) => void;
}>;

export type CheckboxValue = string | boolean | number;

export type CheckboxOptions = CheckboxItem[];

export type CheckboxItem = string | number | CheckboxProps;
