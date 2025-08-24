import React, { useState } from "react";

const App = () => {
  const [selectedWeek, setSelectedWeek] = useState("all");

  // Parse the timetable data
  const timetableData = {
    "Monday": [
      {
        period: "1-2",
        time: "8:00-9:40",
        classes: [
          { name: "Physical Education 4", teacher: "Chen Ming", room: "Volleyball Court, Longzihu Campus", weeks: "1-16" },
        ]
      },
      {
        period: "3-4",
        time: "10:00-11:40",
        classes: [
          { name: "Innovation & Entrepreneurship Foundation", teacher: "Wang Shijia", room: "Building 2, Room 2508, Longzihu Campus", weeks: "11-14" },
          { name: "General Chemistry", teacher: "Wang Qiaoling", room: "Building 1, Room 1505, Longzihu Campus", weeks: "1-7" },
          { name: "Experiment Project 7", teacher: "Zhu Guozhong", room: "Computing Center S5-503, Longzihu Campus", weeks: "17" }
        ]
      },
      {
        period: "6-7",
        time: "14:30-16:10",
        classes: [
          { name: "Computer Organization Principles", teacher: "Ma Bin", room: "Building 1, Room 1505, Longzihu Campus", weeks: "4" },
          { name: "China's Energy, Environment and National Conditions", teacher: "Wen Meng", room: "Building 1, Room 1506, Longzihu Campus", weeks: "1-3,5-17" }
        ]
      },
      {
        period: "8-9",
        time: "16:30-18:10",
        classes: [
          { name: "Computer Graphics", teacher: "Cao Yuanhao", room: "Building 1, Room 1505, Longzihu Campus", weeks: "11-18" },
          { name: "Computer Organization Principles", teacher: "Shi Ge", room: "Building 1, Room 1505, Longzihu Campus", weeks: "5-9" }
        ]
      }
    ],
    "Tuesday": [
      {
        period: "1-2",
        time: "8:00-9:40",
        classes: [
          { name: "Experiment Project 1", teacher: "Yue Yuanyuan", room: "Group 1, Room 4, S3-F103, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 5", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "18" },
          { name: "The Magic of English Grammar", teacher: "Zhou Yu", room: "Building 1, Room 1305, Longzihu Campus", weeks: "1-16" }
        ]
      },
      {
        period: "3-4",
        time: "10:00-11:40",
        classes: [
          { name: "Experiment Project 1", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "9" },
          { name: "Experiment Project 3", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "10" },
          { name: "Experiment Project 5", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 2", teacher: "Yue Yuanyuan", room: "Group 1, Room 4, S3-F103, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 6", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "18" },
          { name: "Computer Networks", teacher: "Wang Qingjiang", room: "Building 1, Room 1505, Longzihu Campus", weeks: "1-8" }
        ]
      },
      {
        period: "6-7",
        time: "14:30-16:10",
        classes: [
          { name: "Experiment Project 1", teacher: "Wang Qingjiang", room: "Group 1, S5-503, Longzihu Campus", weeks: "5" },
          { name: "Experiment Project 2", teacher: "Wang Qingjiang", room: "Group 1, S5-503, Longzihu Campus", weeks: "6" },
          { name: "Experiment Project 2", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "9" },
          { name: "Experiment Project 4", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "10" },
          { name: "Experiment Project 1", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 6", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 11", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "18" }
        ]
      },
      {
        period: "8-9",
        time: "16:30-18:10",
        classes: [
          { name: "Experiment Project 2", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 7", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 12", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "18" },
          { name: "Database Principles and Applications", teacher: "Xie Ning", room: "Building 1, Room 1505, Longzihu Campus", weeks: "1,4-10" }
        ]
      }
    ],
    "Wednesday": [
      {
        period: "1-2",
        time: "8:00-9:40",
        classes: [
          { name: "Experiment Project 3", teacher: "Cao Yuanhao", room: "Group 1, Computing Center S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 8", teacher: "Cao Yuanhao", room: "Group 1, Computing Center S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 13", teacher: "Cao Yuanhao", room: "Group 1, Computing Center S5-508, Longzihu Campus", weeks: "18" }
        ]
      },
      {
        period: "3-4",
        time: "10:00-11:40",
        classes: [
          { name: "Experiment Project 3", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "8" },
          { name: "Experiment Project 5", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "9" },
          { name: "Experiment Project 7", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "10" },
          { name: "General Chemistry", teacher: "Wang Qiaoling", room: "Building 1, Room 1505, Longzihu Campus", weeks: "1-7" },
          { name: "Operating Systems", teacher: "Yue Yuanyuan", room: "Building 1, Room 1504, Longzihu Campus", weeks: "11-18" }
        ]
      },
      {
        period: "6-7",
        time: "14:30-16:10",
        classes: [
          { name: "Experiment Project 6", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 8", teacher: "Zhu Guozhong", room: "Group 1, S5-503, Longzihu Campus", weeks: "17" }
        ]
      },
      {
        period: "8-9",
        time: "16:30-18:10",
        classes: [
          { name: "Computer Graphics", teacher: "Cao Yuanhao", room: "Building 1, Room 1504, Longzihu Campus", weeks: "11-18" },
          { name: "Computer Organization Principles", teacher: "Shi Ge", room: "Building 1, Room 1504, Longzihu Campus", weeks: "4-9" }
        ]
      }
    ],
    "Thursday": [
      {
        period: "1-2",
        time: "8:00-9:40",
        classes: [
          { name: "Experiment Project 3", teacher: "Wang Qingjiang", room: "Group 1, Computing Center S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 4", teacher: "Wang Qingjiang", room: "Group 1, Computing Center S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 3", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 7", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "18" }
        ]
      },
      {
        period: "3-4",
        time: "10:00-11:40",
        classes: [
          { name: "Experiment Project 6", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "9" },
          { name: "Experiment Project 8", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "10" },
          { name: "Experiment Project 4", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 8", teacher: "Yue Yuanyuan", room: "Group 1, Room 3, S3-F103, Longzihu Campus", weeks: "18" },
          { name: "Computer Networks", teacher: "Wang Qingjiang", room: "Building 1, Room 1504, Longzihu Campus", weeks: "1-8" }
        ]
      },
      {
        period: "6-7",
        time: "14:30-16:10",
        classes: [
          { name: "Computer Organization Principles", teacher: "Shi Ge", room: "Building 1, Room 1506, Longzihu Campus", weeks: "5-9" },
          { name: "Experiment Project 4", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 9", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 15", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "18" }
        ]
      },
      {
        period: "8-9",
        time: "16:30-18:10",
        classes: [
          { name: "Experiment Project 1", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "5" },
          { name: "Experiment Project 2", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "7" },
          { name: "Experiment Project 4", teacher: "Xie Ning", room: "Group 1, S5-503, Longzihu Campus", weeks: "8" },
          { name: "Experiment Project 5", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "16" },
          { name: "Experiment Project 10", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "17" },
          { name: "Experiment Project 16", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "18" },
          { name: "Computer Organization Principles", teacher: "Shi Ge", room: "Building 1, Room 1504, Longzihu Campus", weeks: "4" }
        ]
      }
    ],
    "Friday": [
      {
        period: "1-2",
        time: "8:00-9:40",
        classes: [
          { name: "Experiment Project 14", teacher: "Cao Yuanhao", room: "Group 1, S5-508, Longzihu Campus", weeks: "18" }
        ]
      },
      {
        period: "3-4",
        time: "10:00-11:40",
        classes: [
          { name: "Database Principles and Applications", teacher: "Xie Ning", room: "Building 1, Room 1504, Longzihu Campus", weeks: "1,4-10" },
          { name: "Operating Systems", teacher: "Yue Yuanyuan", room: "Building 1, Room 1505, Longzihu Campus", weeks: "11-18" }
        ]
      },
      {
        period: "11-12",
        time: "19:00-20:40",
        classes: [
          { name: "Chinese Ancient Calligraphy and Painting", teacher: "Feng Can, Ru Li", room: "Building 1, Room 1505, Longzihu Campus", weeks: "11-18" }
        ]
      }
    ]
  };

  const weekOptions = ["all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-teal-500 to-cyan-500",
    "from-rose-500 to-pink-500"
  ];

  const getClassColor = (index) => {
    return colors[index % colors.length];
  };

  const filterByWeek = (classes, week) => {
    if (week === "all") return classes;
    return classes.filter(cls => {
      const weekRanges = cls.weeks.split(',').map(range => {
        if (range.includes('-')) {
          const [start, end] = range.split('-').map(Number);
          return week >= start && week <= end;
        }
        return Number(range) === Number(week);
      });
      return weekRanges.some(range => range === true);
    });
  };

  const filteredTimetable = Object.keys(timetableData).reduce((acc, day) => {
    acc[day] = timetableData[day].map(period => ({
      ...period,
      classes: filterByWeek(period.classes, selectedWeek)
    })).filter(period => period.classes.length > 0);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              North China University of Water Resources and Electric Power
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
              2023LXSB03 Computer Science Class Schedule
            </h2>
            <p className="text-lg text-gray-300">2025-2026 Academic Year, First Semester</p>
            <p className="text-gray-400 mt-2">Information Engineering College (International Students)</p>
          </div>

          {/* Week Selector */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-6 border border-white/20">
            <label className="text-white font-semibold mr-4">Select Week:</label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="bg-white/20 text-white rounded-lg px-4 py-2 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {weekOptions.map(week => (
                <option key={week} value={week} className="bg-slate-800">
                  {week === "all" ? "All Weeks" : `Week ${week}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-yellow-500/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-500/30">
            <h3 className="text-yellow-300 font-semibold mb-2">Note 1:</h3>
            <p className="text-yellow-100 text-sm">
              Computer System Development Comprehensive Practice I: Weeks 11-15 at Computing Center, Instructor: Cao Yuanhao
            </p>
          </div>
          <div className="bg-yellow-500/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-500/30">
            <h3 className="text-yellow-300 font-semibold mb-2">Note 2:</h3>
            <p className="text-yellow-100 text-sm">
              Computer System Development Comprehensive Practice I: Weeks 11-15 at Computing Center, Instructor: Yue Yuanyuan
            </p>
          </div>
        </div>

        {/* Timetable */}
        <div className="grid gap-6">
          {Object.entries(filteredTimetable).map(([day, periods], dayIndex) => (
            <div key={day} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className={`bg-gradient-to-r ${getClassColor(dayIndex)} p-4`}>
                <h3 className="text-2xl font-bold text-white text-center">{day}</h3>
              </div>
              <div className="divide-y divide-white/10">
                {periods.map((period, periodIndex) => (
                  <div key={period.period} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-white/20 rounded-lg px-3 py-1 text-center">
                          <div className="text-white font-semibold">{period.period}</div>
                          <div className="text-white/70 text-sm">{period.time}</div>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {period.classes.map((cls, clsIndex) => (
                          <div 
                            key={`${cls.name}-${cls.teacher}`}
                            className={`bg-gradient-to-r ${getClassColor(dayIndex + clsIndex)} rounded-lg p-3 text-white transform transition-all hover:scale-105`}
                          >
                            <div className="font-semibold text-sm">{cls.name}</div>
                            <div className="text-white/90 text-xs mt-1">Instructor: {cls.teacher}</div>
                            <div className="text-white/80 text-xs mt-1">Room: {cls.room}</div>
                            <div className="text-white/70 text-xs mt-1">Weeks: {cls.weeks}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Schedule Legend</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
              <span className="text-gray-300">Core Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded"></div>
              <span className="text-gray-300">Laboratory Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span className="text-gray-300">Special Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
              <span className="text-gray-300">Electives & Humanities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;