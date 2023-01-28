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
          <p>80%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter-status">
        <div className="chapter-number">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 20</p>
          <button type="button" className="update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>

    </div>
  );
}
