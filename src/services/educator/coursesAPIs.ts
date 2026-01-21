import http from "../http";

export interface CreateCourseResponse {
  message: string;
  course_id: number;
  slug?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface SubCategory {
  id: number;
  name: string;
  category: number;
}

export async function check() {
  return await http.get('/');
}

export async function createCourse(courseData: FormData) {
  return await http.post<CreateCourseResponse>("/courses/courses/",
    courseData,
  );
}

export async function getEducatorCourses() {
  return await http.get('/courses/courses/')
}

export async function getCategories() {
  return await http.get<Category[]>('/courses/categories/')
}

export async function createCategory(name: string) {
  return await http.post<Category>('/courses/categories/', { name })
}

export async function getSubCategories() {
  return await http.get<SubCategory[]>('/courses/subcategories/')
}

export async function createSubCategory(name: string, category: number) {
  return await http.post<SubCategory>('/courses/subcategories/', { name, category })
}
