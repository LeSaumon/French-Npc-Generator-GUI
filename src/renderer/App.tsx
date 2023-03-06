import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Button, Stack } from '@chakra-ui/react';
import dndIcon from '../../assets/icons/dnd_icon.jpg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={dndIcon} />
      </div>
      <h1>Générateur de PNJ Donjons & Dragons</h1>
      <div className="Hello">
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" size="xs">
            Générer un PNJ
          </Button>
          <Button colorScheme="teal" size="xs">
            Consulter ses PNJ
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
