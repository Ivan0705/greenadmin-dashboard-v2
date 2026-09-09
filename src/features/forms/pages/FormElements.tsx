import PageBreadcrumb from "../../../shared/ui/common/PageBreadCrumb";
import PageMeta from "../../../shared/ui/common/PageMeta";
import CheckboxComponents from "../../../shared/ui/form/form-elements/CheckboxComponents";
import DefaultInputs from "../../../shared/ui/form/form-elements/DefaultInputs";
import DropzoneComponent from "../../../shared/ui/form/form-elements/DropZone";
import FileInputExample from "../../../shared/ui/form/form-elements/FileInputExample";
import InputGroup from "../../../shared/ui/form/form-elements/InputGroup";
import InputStates from "../../../shared/ui/form/form-elements/InputStates";
import RadioButtons from "../../../shared/ui/form/form-elements/RadioButtons";
import SelectInputs from "../../../shared/ui/form/form-elements/SelectInputs";
import TextAreaInput from "../../../shared/ui/form/form-elements/TextAreaInput";
import ToggleSwitch from "../../../shared/ui/form/form-elements/ToggleSwitch";

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
