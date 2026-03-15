import { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BrainCircuit, 
  FileUp, 
  Menu,
  User
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'ダッシュボード', icon: LayoutDashboard },
    { id: 'inventory', label: '在庫一覧', icon: Package },
    { id: 'orders', label: '受注・発注入力', icon: ShoppingCart },
    { id: 'ai-predict', label: 'AI需要予測', icon: BrainCircuit },
    { id: 'csv-import', label: 'CSVインポート', icon: FileUp },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900">
      {/* サイドバー */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-slate-700 flex items-center gap-2">
          <Package className="text-blue-400" />
          DX-Stock-Manager
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-blue-600' : 'hover:bg-slate-700'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700 text-xs text-slate-400">
          Target: 2026/05/01 Completion
        </div>
      </aside>

      {/* メインコンテンツエリア */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* ヘッダー */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <div className="flex items-center gap-4 text-lg font-medium">
            <Menu className="cursor-pointer" />
            {menuItems.find(i => i.id === activeTab)?.label}
          </div>
          <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full border">
            <User size={18} className="text-gray-500" />
            <span className="text-sm font-medium">中津 管理者</span>
          </div>
        </header>

        {/* コンテンツ本体 */}
        <section className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-xl shadow-sm p-10 border border-gray-200">
            {activeTab === 'dashboard' && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">ようこそ、次世代受発注システムへ</h2>
                <p className="text-gray-500">
                  左のメニューから操作を選択してください。
                  明日はここに「在庫一覧テーブル」を実装します！
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-blue-600 text-sm font-bold">現在の在庫数</p>
                    <p className="text-3xl font-bold mt-2">1,248</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-green-600 text-sm font-bold">本日の受注数</p>
                    <p className="text-3xl font-bold mt-2">42</p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
                    <p className="text-purple-600 text-sm font-bold">AI予測アラート</p>
                    <p className="text-3xl font-bold mt-2 text-red-500">3件</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab !== 'dashboard' && (
              <div className="text-center py-20">
                <p className="text-gray-400 italic">
                  【 {menuItems.find(i => i.id === activeTab)?.label} 】画面を構築中...
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;