"use client";
import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, TrendingUp, Clock } from 'lucide-react';

export default function StudentProfile({ params }) {
  const studentId = params?.id || '1';
  
  // Mock student data - in real app, fetch using studentId
  const [student, setStudent] = useState({
    student_id: studentId,
    name: 'Alex Johnson',
    email: 'alex.johnson@studysphere.com',
    mobile: '+91 98765 43210',
    dob: '1998-05-15',
    gender: 'Male',
    address: '123 Learning Street, Tech Park',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226001',
    enrolled_date: '2024-01-15T10:30:00',
    status: 'Active'
  });

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Advanced Web Development',
      instructor: 'Dr. Sarah Smith',
      progress: 75,
      totalLessons: 48,
      completedLessons: 36,
      grade: 'A',
      enrolledDate: '2024-01-20',
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      name: 'Data Structures & Algorithms',
      instructor: 'Prof. Michael Chen',
      progress: 60,
      totalLessons: 60,
      completedLessons: 36,
      grade: 'B+',
      enrolledDate: '2024-01-20',
      lastAccessed: '1 day ago'
    },
    {
      id: 3,
      name: 'Machine Learning Fundamentals',
      instructor: 'Dr. Emily Davis',
      progress: 45,
      totalLessons: 40,
      completedLessons: 18,
      grade: 'B',
      enrolledDate: '2024-02-01',
      lastAccessed: '3 days ago'
    },
    {
      id: 4,
      name: 'Database Management Systems',
      instructor: 'Prof. Robert Wilson',
      progress: 90,
      totalLessons: 35,
      completedLessons: 32,
      grade: 'A+',
      enrolledDate: '2024-01-15',
      lastAccessed: '5 hours ago'
    }
  ]);

  const [stats, setStats] = useState({
    totalCourses: 4,
    completedCourses: 1,
    inProgressCourses: 3,
    totalHoursLearned: 156,
    averageGrade: 'A-',
    certificatesEarned: 3,
    assignmentsCompleted: 42,
    overallProgress: 68
  });

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-50';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{student.name}</h2>
                  <p className="text-gray-500 mt-1">Student ID: {student.student_id}</p>
                </div>
                <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                  {student.status}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{student.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{student.city}, {student.state}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Joined {new Date(student.enrolled_date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Courses</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalCourses}</p>
              </div>
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Overall Progress</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.overallProgress}%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Grade</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.averageGrade}</p>
              </div>
              <Award className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Learning Hours</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalHoursLearned}</p>
              </div>
              <Clock className="w-10 h-10 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrolled Courses</h3>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">{course.name}</h4>
                    <p className="text-gray-500 text-sm mt-1">Instructor: {course.instructor}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(course.grade)}`}>
                      Grade: {course.grade}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progress: {course.completedLessons} / {course.totalLessons} lessons
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${getProgressColor(course.progress)} h-3 rounded-full transition-all duration-300`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}</span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">COMPLETED COURSES</h4>
            <p className="text-2xl font-bold text-gray-900">{stats.completedCourses}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">CERTIFICATES EARNED</h4>
            <p className="text-2xl font-bold text-gray-900">{stats.certificatesEarned}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">ASSIGNMENTS COMPLETED</h4>
            <p className="text-2xl font-bold text-gray-900">{stats.assignmentsCompleted}</p>
          </div>
        </div>
      </div>
    </div>
  );
}