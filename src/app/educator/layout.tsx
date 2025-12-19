import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {EducatorSideBar} from '@/components/educatorSidebar'
export default function EducatorLayout({ children }: { children: React.ReactNode }) {
  return <main className={`flex `}>
    {/* <LeftSidebar></LeftSidebar> */}
    <EducatorSideBar></EducatorSideBar>
    {children}
    <RightSidebar></RightSidebar>
    </main>;
}
