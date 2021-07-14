import './App.css';
import { HashRouter as Router, Route  } from 'react-router-dom'
import DevelopersScreen from './Screens/DevelopersScreen'
import Header from './Components/Header'
import './bootstrap.min.css';
import DeveloperScreen from './Screens/DeveloperScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import ProjectScreen from './Screens/ProjectScreen';
import MessagesScreen from './Screens/MessagesScreen';
import AccountScreen from './Screens/AccountScreen';
import EditAccountScreen from './Screens/EditAccountScreen';
import AddSkillScreen from './Screens/AddSkillScreen';
import AddProjectScreen from './Screens/AddProjectScreen';
import DeleteScreen from './Screens/DeleteScreen';
import LoginScreen from './Screens/LoginScreen';


function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={DevelopersScreen} exact />
      <Route path="/profile/:name" component={DeveloperScreen} />
      <Route path="/projects/:name" component={ProjectScreen} exact />
      <Route path="/projects" component={ProjectsScreen} exact />
      <Route path="/messages" component={MessagesScreen} />
      <Route path="/account/add/skill" component={AddSkillScreen} exact />
      <Route path="/account/add/project" component={AddProjectScreen} exact />
      <Route path="/account/edit" component={EditAccountScreen} exact />
      <Route path="/account/delete" component={DeleteScreen} exact />
      <Route path="/account" component={AccountScreen} exact />
      <Route path="/login" component={LoginScreen} />
    </Router>
  );
}

export default App
