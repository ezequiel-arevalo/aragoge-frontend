import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Flex } from '@chakra-ui/react';
import { PersonalInfoTab } from './PersonalInfoTab';
import { AccountTab } from './AccountTab';
import { SecurityTab } from './SecurityTab';
import { RoleTab } from './RoleTab';
import { PreferencesTab } from './PreferencesTab';

export const ProfileTabs = ({ userData, formData, setFormData, onSave }) => {

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
          flexWrap="wrap" // Para permitir que las pestañas se envuelvan en pantallas pequeñas
          mb={6}
        >
          <Tab
            className="no-global-styles"
            w={['100%', 'auto']}  // 100% de ancho en mobile, auto en pantallas más grandes
            textAlign="center"
            mb={[2, 0]} // Espacio entre los tabs en mobile
          >
            Personal
          </Tab>
          <Tab
            className="no-global-styles"
            w={['100%', 'auto']}
            textAlign="center"
            mb={[2, 0]}
          >
            Account
          </Tab>
          <Tab
            className="no-global-styles"
            w={['100%', 'auto']}
            textAlign="center"
            mb={[2, 0]}
          >
            Security
          </Tab>
          <Tab
            className="no-global-styles"
            w={['100%', 'auto']}
            textAlign="center"
            mb={[2, 0]}
          >
            Role
          </Tab>
          <Tab
            className="no-global-styles"
            w={['100%', 'auto']}
            textAlign="center"
            mb={[2, 0]}
          >
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