import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Flex } from '@chakra-ui/react';
import { PersonalInfoTab } from './PersonalInfoTab';
import { AccountTab } from './AccountTab';
import { SecurityTab } from './SecurityTab';
import { RoleTab } from './RoleTab';
import { PreferencesTab } from './PreferencesTab';

export const ProfileTabs = ({ userData, formData, setFormData, onSave, onDelete }) => {

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <>
      {/* Contenedor de Tabs */}
      <Tabs variant="soft-rounded" colorScheme="gray" w="100%">
        {/* Listado de pestañas */}
        <TabList
          as={Flex}
          justifyContent="space-evenly"
          flexWrap="wrap"
          mb={6}
        >
          <Tab w={['100%', 'auto']} textAlign="center" mb={[2, 0]} className="no-global-styles">
            Personal
          </Tab>
          <Tab w={['100%', 'auto']} textAlign="center" mb={[2, 0]} className="no-global-styles">
            Account
          </Tab>
          <Tab w={['100%', 'auto']} textAlign="center" mb={[2, 0]} className="no-global-styles">
            Security
          </Tab>
          <Tab w={['100%', 'auto']} textAlign="center" mb={[2, 0]} className="no-global-styles">
            Role
          </Tab>
          <Tab w={['100%', 'auto']} textAlign="center" mb={[2, 0]} className="no-global-styles">
            Preferences
          </Tab>
        </TabList>

        {/* Contenido de las pestañas */}
        <TabPanels>
          <TabPanel>
            <PersonalInfoTab formData={formData} setFormData={setFormData} />
          </TabPanel>
          <TabPanel>
            <AccountTab userData={userData} />
          </TabPanel>
          <TabPanel>
            <SecurityTab onDelete={onDelete} />
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
      <Flex justifyContent="center">
        <Button
          colorScheme="light"
          mt={4}
          onClick={handleSave}
          w={['100%', '75%', '50%']}
          py={2}
        >
          Save Changes
        </Button>
      </Flex>
    </>
  );
};