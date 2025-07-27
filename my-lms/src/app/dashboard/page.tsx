'use client';

import { fecthLessons, togglelessonStatus } from '@/lib/lessonsService';
import { useEffect, useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCheckCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./dashboard.css"

export default function Dashboard() {
  const [todayLesson, setTodayLesson] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllCompleted, setShowAllCompleted] = useState(false);

  useEffect(() => {
    fecthLessons().then((lessons) => {
      const today = new Date().toISOString().split('T')[0];
      const found = lessons.filter((lesson: any) => lesson.scheduled_date === today);
      setTodayLesson(found.length > 0 ? found : []);
    });
  }, []);

  const upcomingLessons = todayLesson.filter((lesson) => !lesson.is_completed);
  const completedLessons = todayLesson.filter((lesson) => lesson.is_completed);

  const showUpcoming = filter === 'all' || filter === 'upcoming';
  const showCompleted = filter === 'all' || filter === 'completed';

    // formatting date 
  function formatDuration(duration: string): string {
    const [hours, minutes, seconds] = duration.split(':').map(Number);

    if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''}${minutes > 0 ? ` ${minutes} min` : ''}`;
    } else {
        return `${minutes} min`;
    }
    }

    // handling completion status toggle
    const handleToggle = async(id : string, currentStatus: boolean) => {
        const newStatus = !currentStatus;
        try {
            await togglelessonStatus(id, newStatus)

            setTodayLesson((prev)=>
                prev.map((lesson)=>
                    lesson.id === id ? {...lesson, is_completed: newStatus} : lesson
                )
            )
        } catch (error) {
            toast.error('Failed to update lesson status', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    }

  return (
    <div>
      <h2>Today's Lessons</h2>

      <div className='toggle-container'>
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'upcoming' ? 'active' : ''} onClick={() => setFilter('upcoming')}>Upcoming</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {showUpcoming && upcomingLessons.length > 0 && (
        <div>
          {/* displaying upcoming lessons */}
          <h3 className='upcoming-lesson-title'>Upcoming Lessons</h3>
          <div className='lesson-parent-container'>
          {(showAllUpcoming ? upcomingLessons : upcomingLessons.slice(0, 3)).map((lesson) => (

            <div key={lesson.id} className='lesson-container'>
              
              <img src={lesson.img} alt={lesson.title} />
              <div>
                <h4>{lesson.description}</h4>
                <h3>{lesson.title}</h3>
                <p className={`lesson-text ${lesson.stream === 'live session' ? 'live' : 'self'}`}>{lesson.stream}</p>
                <p>duration : {formatDuration(lesson.duration)}</p>
                <div className='lesson-markComplete'>
                    <p>{lesson.is_completed ? 'marked as done' : 'mark as done'}</p>
                    <h3 className={`done-icon ${lesson.is_completed ? 'done' : 'not-done'}`}
                        onClick={() => handleToggle(lesson.id, lesson.is_completed)}
                        >
                        {lesson.is_completed ? <BsCheckCircleFill /> : <FaRegCircleCheck />}
                    </h3>
                </div>
              </div>
              


            </div>
          ))}
          </div>
          {upcomingLessons.length > 3 && !showAllUpcoming && (
            <p onClick={() => setShowAllUpcoming(true)} className='view-more-btn'> + View More</p>
          )}
        </div>
      )}
      

      {showCompleted && completedLessons.length > 0 &&  (
        <div>
          {/* displaying completed lessons */}
          <h3>Completed Lessons</h3>
          <div className='lesson-parent-container'>
          {(showAllCompleted ? completedLessons : completedLessons.slice(0, 3)).map((lesson) => (
            <div key={lesson.id} className='lesson-container'>
              <img src={lesson.img} alt={lesson.title} />
              <div>
                <h4>{lesson.description}</h4>
                <h3>{lesson.title}</h3>
                <p className={`lesson-text ${lesson.stream === 'live session' ? 'live' : 'self'}`}>{lesson.stream}</p>
                <p>duration : {formatDuration(lesson.duration)}</p>
                <div className='lesson-markComplete'>
                    <p>{lesson.is_completed ? 'marked as done' : 'mark as done'}</p>
                    <h3 className={`done-icon ${lesson.is_completed ? 'done' : 'not-done'}`}
                        onClick={() => handleToggle(lesson.id, lesson.is_completed)}
                        >
                        {lesson.is_completed ? <BsCheckCircleFill /> : <FaRegCircleCheck />}
                    </h3>
                </div>
              </div>
            </div>
          ))}
          </div>
          {completedLessons.length > 3 && !showAllCompleted && (
            <button onClick={() => setShowAllCompleted(true)}>View More</button>
          )}
        </div>
      )}
    </div>
  );
}
