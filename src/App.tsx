import { useState } from 'react'
import componentsData from '../design-tokens/organized-components.json'
import { componentRegistry } from './componentRegistry'

// Component viewer with Figma screenshot and code display
function ComponentViewer({ component }: { component: any }) {
  const [showCode, setShowCode] = useState(false)
  const [code, setCode] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [selectedProps, setSelectedProps] = useState<Record<string, any>>({})

  const loadCode = async () => {
    if (code) return
    setLoading(true)
    try {
      const response = await fetch(`/extracted-components/${component.name}.tsx`)
      const text = await response.text()
      setCode(text)
    } catch (error) {
      setCode('// Error loading component code')
    }
    setLoading(false)
  }

  // Generate Figma screenshot URL
  // Using Figma's image API to get component screenshot
  const getFigmaScreenshot = () => {
    const fileKey = 'OjFchNAdeHiNH5W4wYLSGS'
    const nodeId = component.nodeId
    // Figma image export URL format
    return `https://www.figma.com/file/${fileKey}?node-id=${nodeId.replace(':', '-')}`
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  // Get component from registry for live rendering
  const ComponentToRender = componentRegistry[component.name]
  
  // Debug logging
  console.log('Component:', component.name, 'Found in registry:', !!ComponentToRender)

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[#AF9577] transition-all">
      {/* Component Header */}
      <div className="bg-gradient-to-r from-[#F4EFEA] to-white p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#333333]">{component.name}</h3>
            <p className="text-sm text-[#606060]">
              {component.variantCount} variant{component.variantCount !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { loadCode(); setShowCode(!showCode) }}
              className="px-3 py-1.5 bg-[#AF9577] text-white rounded-lg text-sm font-medium hover:bg-[#9A8468] transition-colors"
            >
              {showCode ? 'Hide Code' : 'View Code'}
            </button>
          </div>
        </div>
      </div>

      {/* Component Preview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50">
        {/* Figma Design Reference */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-xs font-semibold text-gray-600 mb-3">📸 FIGMA DESIGN</div>
          <div className="flex items-center justify-center min-h-[150px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
            {component.nodeId ? (
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">
                  <a 
                    href={`https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS?node-id=${component.nodeId.replace(':', '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AF9577] hover:underline"
                  >
                    View in Figma →
                  </a>
                </div>
                <div className="text-xs text-gray-400">Node ID: {component.nodeId}</div>
              </div>
            ) : (
              <div className="text-gray-400 text-sm">No Figma reference</div>
            )}
          </div>
        </div>

        {/* React Component Render */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-xs font-semibold text-gray-600 mb-3">⚛️ LIVE REACT COMPONENT</div>
          <div className="flex items-center justify-center min-h-[150px] bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-dashed border-gray-300">
            {ComponentToRender ? (
              <div className="transform scale-110">
                <ComponentToRender {...selectedProps} />
              </div>
            ) : (
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-2">⚠️ Component not in registry</div>
                <div className="text-xs text-gray-500">Looking for: {component.name}</div>
                <div className="text-xs text-gray-400 mt-2">
                  Registry has {Object.keys(componentRegistry).length} components
                </div>
              </div>
            )}
          </div>
          {ComponentToRender && (
            <div className="mt-3 text-xs text-gray-500 text-center">
              ✨ Live rendering with React + Tailwind CSS
            </div>
          )}
        </div>
      </div>

      {/* Code Display */}
      {showCode && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-4 flex justify-between items-center bg-gray-100">
            <span className="text-sm font-semibold text-gray-700">Component Code</span>
            <button
              onClick={copyCode}
              disabled={!code}
              className="px-3 py-1.5 bg-[#AF9577] text-white rounded-lg text-sm font-medium hover:bg-[#9A8468] transition-colors disabled:opacity-50"
            >
              📋 Copy Code
            </button>
          </div>
          <div className="p-4 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="text-gray-400">Loading code...</div>
            ) : (
              <pre className="text-xs bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <code>{code || 'Click "View Code" to load'}</code>
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Get all components from all categories
  const allComponents: any[] = []
  const categories = Object.keys(componentsData.byPage)
  
  categories.forEach(category => {
    const categoryData = componentsData.byPage[category as keyof typeof componentsData.byPage]
    if (categoryData && categoryData.components) {
      categoryData.components.forEach((comp: any) => {
        allComponents.push({ ...comp, category })
      })
    }
  })

  // Filter components
  const filteredComponents = allComponents.filter(comp => {
    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen bg-[#F4F4FA]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto z-50">
        <div className="p-6 border-b border-gray-200">
          <div className="text-sm font-semibold text-[#606060] mb-1">COMPONENT LIBRARY</div>
          <h2 className="text-xl font-bold text-[#333333]">Design System</h2>
        </div>
        
        {/* Search in sidebar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF9577]"
          />
        </div>

        {/* Navigation */}
        <nav className="pb-6">
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-[#606060] mb-2">CATEGORIES</div>
            <button
              onClick={() => setSelectedCategory('All')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === 'All' 
                  ? 'bg-[#F4EFEA] text-[#AF9577] font-medium' 
                  : 'text-[#333333] hover:bg-gray-50'
              }`}
            >
              <span>All Components</span>
              <span className="float-right text-xs text-[#606060]">{allComponents.length}</span>
            </button>
            {categories.map(cat => {
              const count = allComponents.filter(c => c.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-[#F4EFEA] text-[#AF9577] font-medium' 
                      : 'text-[#333333] hover:bg-gray-50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="float-right text-xs text-[#606060]">{count}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-60 flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-8 py-6">
          <h1 className="text-3xl font-bold text-[#333333]">
            {selectedCategory === 'All' ? 'All Components' : selectedCategory}
          </h1>
          <p className="text-[#606060] mt-1">
            {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} • Live Rendering + Code Export
          </p>
        </header>

        <div className="px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#AF9577]">{allComponents.length}</div>
              <div className="text-sm text-[#606060] mt-1">Total Components</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#AF9577]">{categories.length}</div>
              <div className="text-sm text-[#606060] mt-1">Categories</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#AF9577]">{componentsData.stats.totalComponents}</div>
              <div className="text-sm text-[#606060] mt-1">Total Variants</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#AF9577]">{filteredComponents.length}</div>
              <div className="text-sm text-[#606060] mt-1">Showing</div>
            </div>
          </div>

          {/* Components Grid */}
          <div className="space-y-6">
            {/* Debug info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="text-sm text-yellow-800">
                <strong>Debug Info:</strong><br/>
                Total components loaded: {allComponents.length}<br/>
                Filtered components: {filteredComponents.length}<br/>
                Search term: "{searchTerm}"<br/>
                Selected category: {selectedCategory}
              </div>
            </div>
            
            {filteredComponents.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border-2 border-gray-200">
                <div className="text-6xl mb-4">🔍</div>
                <div className="text-xl font-semibold text-gray-700 mb-2">No components found</div>
                <div className="text-gray-500">
                  {searchTerm ? `No components match "${searchTerm}"` : 'No components in this category'}
                </div>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="mt-4 px-4 py-2 bg-[#AF9577] text-white rounded-lg hover:bg-[#9A8468]"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredComponents.map((component, index) => (
                <ComponentViewer key={`${component.name}-${index}`} component={component} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
