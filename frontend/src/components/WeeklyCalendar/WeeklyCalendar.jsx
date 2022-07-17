import React from 'react';
import styles from './WeeklyCalendar.module.css';
import Day from '../Day/Day';

export default function WeeklyCalendar() {
  return (
    <div className={styles.WeeklyCalendar}>
      <Day day="MON" />
      <Day day="TUE" />
      <Day day="WED" />
      <Day day="THU" />
      <Day day="FRI" />
      <Day day="SAT" />
      <Day day="SUN" />
    </div>
  );
}
