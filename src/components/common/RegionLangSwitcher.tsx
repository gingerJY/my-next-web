'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { regionsData, countryLocales } from '@/constants/regions';

export default function RegionLangSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // 当前路径
  const [isOpen, setIsOpen] = useState(false);

  // 从 pathname 里解析 region
  const getCurrentRegion = (): CountryCode => {
    const parts = pathname.split('/').filter(Boolean); // 去掉空
    if (parts.length === 0) return 'global'; // 根路径
    const region = parts[0] as CountryCode;
    return countryLocales[region] ? region : 'global'; // 如果不在映射里，就 fallback
  };

  const currentRegion = getCurrentRegion();

  // 根据当前 region 找按钮文案
  const getButtonLabel = () => {
    for (const [, items] of Object.entries(regionsData)) {
      const item = items.find(i => i.region === currentRegion);
      if (item) {
        return `${item.regionText} / ${item.langText}`;
      }
    }
    return 'Global / English';
  };

  const handleSelect = (region: CountryCode) => {
    setIsOpen(false);
    if (region === 'global') {
      router.push('/');
    } else {
      router.push(`/${region}`);
    }
  };

  return (
    <div className="relative inline-block">
      {/* 按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border rounded-lg bg-white shadow"
      >
        {getButtonLabel()}
      </button>

      {/* 遮罩 */}
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" />}

      {/* 弹窗 */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 z-50 w-[708px] xl:w-[1200px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 bg-[#f2f2f2] rounded-lg shadow-lg">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">
              Select Your Country/Region
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Close
            </button>
          </div>

          <div className="space-y-[30px] lg:space-y-[60px] px-[30px] pt-[40px] pb-[120px] max-h-[70vh] overflow-y-auto">
            {Object.entries(regionsData).map(([continent, items]) => (
              <div key={continent}>
                <h3 className="font-medium text-xl mb-2.5 text-[#333333]">
                  {continent}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                  {items.map(item => (
                    <button
                      key={item.region}
                      onClick={() => handleSelect(item.region as CountryCode)}
                      className={`flex justify-between items-center border border-white bg-white rounded-lg px-8 py-5 hover:border-[#ff3300] transition-all cursor-pointer`}
                    >
                      <span className="font-medium text-sm text-[#333333]">
                        {item.regionText}
                      </span>
                      <span className="font-medium text-sm text-[#999999]">
                        {item.langText}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
