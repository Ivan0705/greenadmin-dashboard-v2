import { PageMeta } from "@/shared/ui/common";
import PageBreadcrumb from "@/shared/ui/common/PageBreadCrumb";
import { CheckboxComponents, DefaultInputs, FileInputExample, InputGroup, InputStates, RadioButtons, SelectInputs, TextAreaInput, ToggleSwitch } from "@/shared/ui/form/form-elements";
import DropzoneComponent from "@/shared/ui/form/form-elements/DropZone";


export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | GreenAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for GreenAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Form Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
