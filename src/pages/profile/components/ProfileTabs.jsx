import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import { PersonalInfoTab } from './PersonalInfoTab';
import { AccountTab } from './AccountTab';
import { SecurityTab } from './SecurityTab';
import { RoleTab } from './RoleTab';
import { PreferencesTab } from './PreferencesTab';
import { useState } from 'react';

export const ProfileTabs = ({ userData, onSave }) => {
  const [formData, setFormData] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
  });

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList justifyContent="center" mb={6}>
          <Tab className='no-global-styles'>Personal</Tab>
          <Tab className='no-global-styles'>Account</Tab>
          <Tab className='no-global-styles'>Security</Tab>
          <Tab className='no-global-styles'>Role</Tab>
          <Tab className='no-global-styles'>Preferences</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PersonalInfoTab formData={formData} setFormData={setFormData} />
          </TabPanel>
          <TabPanel>
            <AccountTab userData={userData} />
          </TabPanel>
          <TabPanel>
            <SecurityTab onDelete={handleSave} />
          </TabPanel>
          <TabPanel>
            <RoleTab userData={userData} />
          </TabPanel>
          <TabPanel>
            <PreferencesTab />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Botón de Guardar Cambios */}
      <Button colorScheme="blue" mt={4} onClick={handleSave} className="w-full py-2">
        Save Changes
      </Button>
    </>
  );
};

