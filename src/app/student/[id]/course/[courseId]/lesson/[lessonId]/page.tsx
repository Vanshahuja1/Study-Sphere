interface Props { params: { courseId: string; lessonId: string } }
export default function StudentLesson({ params }: Props) { return <h1>Student / Course {params.courseId} / Lesson {params.lessonId}</h1>; }
