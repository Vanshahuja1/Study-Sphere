import http from "../http";

export interface CreateCourseResponse {
  message: string;
  course_id: number;
  slug?: string;
}
export async function check() {
  return  await http.get('/');
}
export async function createCourse(courseData:FormData) {
  return  await http.post("/courses/courses/",
    courseData,
    );
}

export async function getEducatorCourses(){
  return await http.get('/courses/courses/')
}
 