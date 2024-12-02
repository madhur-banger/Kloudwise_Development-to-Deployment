import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
//import Blog from './pages/Documentation'
import BlogDetail from './pages/BlogDetail'
import BlogEditor from './pages/BlogEditor'
import Home from './pages/Home'
import Services from './pages/Services'
import DeploymentServices from './pages/services/DeploymentServices'
import ServerlessSolutions from './pages/services/ServerlessSolutions'
import CostManagement from './pages/services/CostManagement'
import DevOpsTechnology from './pages/services/DevOpsTechnology'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

//demo
import DocumentationPage from './pages/Documentation'
import QuickStartPage from './pages/documentation/QuickStartPage'
import GuidesPage from './pages/documentation/GuidesPage'



function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/deployment" element={<DeploymentServices />} />
              <Route path="/services/serverless" element={<ServerlessSolutions />} />
              <Route path="/services/cost-management" element={<CostManagement />} />
              <Route path="/services/devops" element={<DevOpsTechnology />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/documentation/quick-start" element={<QuickStartPage />} />
              <Route path="/documentation/guides" element={<GuidesPage />} />
              <Route path="/blog/new" element={<BlogEditor />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App