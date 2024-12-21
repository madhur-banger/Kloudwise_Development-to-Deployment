import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'  // Add this import
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import DeploymentServices from './pages/services/DeploymentServices'
import ServerlessSolutions from './pages/services/ServerlessSolutions'
import CostManagement from './pages/services/CostManagement'
import WebDevelopment from './pages/services/WebDevelopment'
import Footer from './components/Footer'
import './index.css'

// Documentation pages
import DocumentationPage from './pages/Documentation'
import QuickStartPage from './pages/documentation/QuickStartPage'
import GuidesPage from './pages/documentation/GuidesPage'

// Add these imports for missing pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


import Contact from './pages/contact';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>  {/* Wrap everything with AuthProvider */}
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
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/documentation/quick-start" element={<QuickStartPage />} />
                <Route path="/documentation/guides" element={<GuidesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Add these routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App