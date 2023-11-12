import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Headings from "../ui/Headings";
import Row from "../ui/Row";
function Settings() {
  return (
    <Row>
      <Headings as="h1">Update hotel settings</Headings>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
