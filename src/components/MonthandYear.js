import React from 'react';

const MonthandYear = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const now = new Date();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  return (
    <p>Dafetite Ogaga • {month} {year}</p>
  );
};

export default MonthandYear;
