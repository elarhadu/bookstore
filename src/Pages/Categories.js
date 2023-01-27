// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addCategory } from '../redux/categories/categories';

// export default function Categories() {
//   return (
//     <button type="submit">Check Status</button>
//   );
// }

// import React from 'react';
// import { useDispatch } from 'react-redux';

// export default function CheckStatus() {
//   const dispatch = useDispatch();

//   const handleCheckStatus = () => {
//     dispatch(checkStatus());
//   }

//   return (
//     <div className="status">
//       <h2>Status</h2>
//       <p>{status}</p>
//       <button type="button" onClick={handleCheckStatus}>Check Status</button>
//     </div>
//   );
// }

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function CheckStatus() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="status">
      <h2>Status</h2>
      <p>{status}</p>
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
    </div>
  );
}
