import './App.css';
import { HashRouter as Router, Route  } from 'react-router-dom'
import DevelopersScreen from './Screens/DevelopersScreen'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import DeveloperScreen from './Screens/DeveloperScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import ProjectScreen from './Screens/ProjectScreen';


function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={DevelopersScreen} exact />
      <Route path="/profile/:name" component={DeveloperScreen} />
      <Route path="/projects" component={ProjectsScreen} />
      <Route path="/project/:name" component={ProjectScreen} />
    </Router>
  );
}

export default App
