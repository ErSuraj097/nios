import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

const subjects = ['All', 'Science', 'Mathematics', 'English', 'Social Science', 'Hindi', 'Sanskrit', 'Computer Science'];

const courses = [
  {
    id: 1, icon: '🔬', subject: 'Science', title: 'Physics: Motion, Force & Energy',
    teacher: 'Dr. V. Mehta', lessons: 24, duration: '18 hrs', level: 'Class 10',
    progress: 72, enrolled: true, tags: ['SCORM', 'Video', 'Quiz'],
  },
  {
    id: 2, icon: '📐', subject: 'Mathematics', title: 'Algebra, Geometry & Trigonometry',
    teacher: 'Ms. S. Verma', lessons: 32, duration: '24 hrs', level: 'Class 10',
    progress: 55, enrolled: true, tags: ['PDF', 'Quiz', 'Simulation'],
  },
  {
    id: 3, icon: '📖', subject: 'English', title: 'Literature, Poetry & Communication',
    teacher: 'Mr. R. Iyer', lessons: 18, duration: '14 hrs', level: 'Class 10',
    progress: 88, enrolled: true, tags: ['Video', 'Audio', 'SLM'],
  },
  {
    id: 4, icon: '🌍', subject: 'Social Science', title: 'History, Civics & Geography',
    teacher: 'Ms. K. Joshi', lessons: 28, duration: '20 hrs', level: 'Class 10',
    progress: 40, enrolled: true, tags: ['PDF', 'Flipbook'],
  },
  {
    id: 5, icon: '🖥️', subject: 'Computer Science', title: 'Basics of Programming & IT',
    teacher: 'Mr. A. Shah', lessons: 20, duration: '16 hrs', level: 'Class 10',
    progress: 0, enrolled: false, tags: ['Video', 'Simulation', 'Quiz'],
  },
  {
    id: 6, icon: '🌿', subject: 'Science', title: 'Biology: Life Processes & Ecosystem',
    teacher: 'Dr. P. Rao', lessons: 22, duration: '16 hrs', level: 'Class 10',
    progress: 0, enrolled: false, tags: ['Video', 'AR/VR', 'SLM'],
  },
];

export default function CoursesPage() {
  return (
    <DashboardLayout title="My Courses" subtitle="Browse, continue, and explore your learning catalog">
      
      {/* Role Switching & Group Filter (Admin/Teacher view) */}
      <div className="flex items-center justify-between mb-4 stagger animate-slide-up">
         <div className="flex gap-2">
            <span className="badge badge-accent">👩‍🏫 Teacher View</span>
            <button className="btn btn-ghost btn-xs">Switch to Student View</button>
         </div>
         <div className="flex gap-2 items-center">
            <span className="text-xs text-muted font-bold">GROUP PERMISSIONS:</span>
            <select className="form-select btn-xs" style={{ width: 'auto', background: 'var(--bg-card)' }}>
               <option>All Cohorts (Delhi Region)</option>
               <option>Secondary 2026-A</option>
               <option>Senior Secondary 2026-B</option>
               <option>Vocational - IT</option>
            </select>
            <button className="btn btn-ghost btn-xs">Manage Groups ⚙️</button>
         </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ padding: '1rem 1.5rem', marginBottom: '1.5rem' }}>
        <div className="flex items-center gap-3 flex-wrap">
          <input id="course-search" className="form-input" placeholder="🔍 Search courses..." style={{ width: '240px', fontSize: '0.85rem' }} />
          <div className="flex gap-2 flex-wrap">
            {subjects.map((s) => (
              <button
                key={s}
                className="btn btn-ghost btn-sm"
                style={{ fontSize: '0.8rem' }}
                id={`filter-${s.toLowerCase().replace(' ', '-')}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <select className="form-select" id="course-sort" style={{ width: '160px', fontSize: '0.85rem', padding: '0.45rem 0.875rem' }}>
              <option>Sort: All Courses</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Not Started</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-3 gap-4 stagger">
        {courses.map((c) => (
          <div key={c.id} className="course-card animate-slide-up">
            {/* Thumbnail */}
            <div className="course-thumb-placeholder" style={{
              background: c.enrolled
                ? 'linear-gradient(135deg, rgba(55,113,248,0.15), rgba(26,34,54,0.9))'
                : 'var(--bg-hover)',
            }}>
              {c.icon}
            </div>

            <div className="course-info">
              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                <span className="badge badge-primary">{c.subject}</span>
                <span className="badge badge-muted">{c.level}</span>
                {c.tags.slice(0,1).map(t => <span key={t} className="badge badge-muted">{t}</span>)}
              </div>

              <div className="course-title">{c.title}</div>

              <div className="course-meta">
                <span>👩‍🏫 {c.teacher}</span>
                <span>📖 {c.lessons} lessons</span>
                <span>⏱ {c.duration}</span>
              </div>

              {c.enrolled && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted">Progress</span>
                    <span className="text-xs font-semibold" style={{ color: 'var(--primary-300)' }}>{c.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-fill ${c.progress === 100 ? 'progress-fill-success' : ''}`} style={{ width: `${c.progress}%` }} />
                  </div>
                </div>
              )}

              <Link href={`/courses/${c.id}`} style={{ textDecoration: 'none' }}>
                <button
                  id={`course-cta-${c.id}`}
                  className={`btn w-full ${c.enrolled ? 'btn-primary' : 'btn-accent'}`}
                  style={{ marginTop: '0.25rem' }}
                >
                  {c.progress > 0 ? '▶ Continue Learning' : c.enrolled ? '▶ Start Course' : '+ Enrol Now'}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
