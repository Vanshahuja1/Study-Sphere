interface Props { params: { courseId: string } }
export default function StudentCourse({ params }: Props) { return <h1>Student / Course {params.courseId}</h1>; }
