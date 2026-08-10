
export default function Footer() {
  return (
    <footer className="bg-dark-navy text-slate-300 border-t border-white/10 select-none">
      <div className="bg-slate-950/60 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © 2026 Nhóm 7 &bull; Trường Đại học FPT. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Môn học:</span>
            <span className="text-light-blue hover:underline cursor-pointer">
              Tư tưởng Hồ Chí Minh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
