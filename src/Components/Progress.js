import React from 'react';
import './Progress.css';

export default function Progress() {
  return (
    <div className="current-progress">
      <div className="progress-tracker">
        <div className="progress">
          <div className="progress-status" />
        </div>
        <div className="statistics">
          <p className="percentage">80%</p>
          <p className="complete">Completed</p>
        </div>
      </div>
      <div className="vertical-pline" />
      <div className="chapter-status">
        <div>
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="current-chapter-number">Chapter 20</p>
        </div>
        <div>
          <button type="button" className="update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}
