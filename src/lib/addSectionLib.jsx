import { type } from "os";
import imgGaller1 from '../../public/imgGallery1.jpg'
import imgGaller2 from '../../public/imgGallery2.jpg'
import imgGaller3 from '../../public/imgGallery3.jpg'
import imgGaller4 from '../../public/imgGallery4.jpg'
import centerBannerImg from '../../public/hero1.png'
import { Play, TestTube, PlayCircleIcon, BookOpen } from "lucide-react";

export const addSectionLibrary = {
  imageGallery: {
    type: "imageGallery",
    props: { images: [imgGaller2, imgGaller3, imgGaller4], title: "My Image Gallery", subtitle: "Walk in our hood" },
  },
  tiles: {
    type: "tiles",
    props: {
      heading: "Best offering", subheading: "Get ready for your exams with best content and latest test series",
      tiles: [
        { title: "Video Courses", PlayCircleIcon: PlayCircleIcon, Icon: Play, bg: "bg-red-400", text: "text-red-400" },
        { title: "Test Series", PlayCircleIcon: PlayCircleIcon, Icon: TestTube, bg: "bg-blue-400", text: "text-blue-400" },
        { title: "Current Affairs", PlayCircleIcon: PlayCircleIcon, Icon: BookOpen, bg: "bg-orange-400", text: "text-orange-400" },
        { title: "Books & E-Books", PlayCircleIcon: PlayCircleIcon, Icon: Play, bg: "bg-green-400", text: "text-green-400" },
      ]
    }
  },
  centerBanner: {
    type: "centerBanner",
    props: {
      title: "Transform Your Learning Journey",
      subtitle: "Join 50,000+ students learning with our interactive courses.",
      button: "Start Learning",
      image: centerBannerImg
    }
  },
};
