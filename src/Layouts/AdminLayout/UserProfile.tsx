export default function UserProfile() {
  return (
    <div className="p-4 border-t border-[#e7ebf3] dark:border-gray-800">
      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAu7fnWsI12j3WfSuURwXMSLf9bk7aQjoWQUsClgvTY2NGcmdUh__KkaLtrS7gAmWCkXNwuLZBhhSh58LBzcViF5HS99JxMDKW0Dnq3ayd-marc5ojFz8cLB0B7UYA1R2qMjlSCNtAknX48CDfDeV5EqinyU0DxhkrL-T68gjB_bV_sTfYi-Sv43I9ZL035jUMu6Ho7U7J0azYQ_WQ6EyMpO6FHJIuszDJRR-LxzrpfK4zcgcFRaichd0k7SRfxfujVbkraxmGj_txd")',
          }}
        />
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-bold truncate">Roberto García</p>
          <p className="text-xs text-[#4c669a] truncate">Admin Senior</p>
        </div>
        <span className="material-symbols-outlined text-gray-400 cursor-pointer">
          logout
        </span>
      </div>
    </div>
  )
}
