import RightSidebar from "@/components/RightSidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EducatorSideBar } from '@/components/educatorSidebar'
import { EducatorProvider } from '../educatorContext/educatorContext.js'
export default function EducatorLayout({ children }: { children: React.ReactNode }) {
  return <EducatorProvider>
    <main className={`flex`}>
      <EducatorSideBar></EducatorSideBar>
      {children}
      <RightSidebar></RightSidebar>
    </main>;
  </EducatorProvider>
}
