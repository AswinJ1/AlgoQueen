import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { sessionData } from '@/data/SessionData';

const SessionCalendar = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());
  
  // Get all dates that have sessions
  const datesWithSessions = sessionData.map(session => {
    const sessionDate = new Date(session.date);
    return new Date(
      sessionDate.getFullYear(), 
      sessionDate.getMonth(), 
      sessionDate.getDate()
    ).toDateString();
  });
  
  // Get sessions for the selected date
  const sessionsOnDate = date 
    ? sessionData.filter(session => {
        const sessionDate = new Date(session.date);
        return (
          sessionDate.getDate() === date.getDate() &&
          sessionDate.getMonth() === date.getMonth() &&
          sessionDate.getFullYear() === date.getFullYear()
        );
      }) 
    : [];

  // Notify parent component when a date with sessions is selected
  useEffect(() => {
    if (sessionsOnDate.length > 0 && onDateSelect) {
      onDateSelect(sessionsOnDate.map(session => session.id));
    }
  }, [date, onDateSelect, sessionsOnDate]);

  return (
    <Card className="shadow-md p-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-indigo-600">
          Session Calendar
        </CardTitle>
      </CardHeader>
      {/* <CardContent>
        <Calendar 
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            withSession: (date) => 
              datesWithSessions.includes(new Date(
                date.getFullYear(), 
                date.getMonth(), 
                date.getDate()
              ).toDateString())
          }}
          modifiersClassNames={{
            withSession: "session-dot"
          }}
        /> */}
         <CardContent className="px-1 sm:px-4">
        <div className="calendar-container w-full overflow-x-auto ">
          <Calendar 
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full max-w-full"
            modifiers={{
              withSession: (date) => 
                datesWithSessions.includes(new Date(
                  date.getFullYear(), 
                  date.getMonth(), 
                  date.getDate()
                ).toDateString())
            }}
            modifiersClassNames={{
              withSession: "session-dot"
            }}
          />
        </div>
        
        {sessionsOnDate.length > 0 && (
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-medium text-indigo-600">
              Sessions on {date?.toLocaleDateString()}
            </h3>
            <ul className="space-y-2">
              {sessionsOnDate.map(session => (
                <li 
                  key={session.id}
                  className="text-xs p-2 rounded-md bg-indigo-600 border border-algoqueen-light text-white"
                >
                  <div className="font-medium">{session.title}</div>
                  <div className="text-slate-50">{session.time}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SessionCalendar;