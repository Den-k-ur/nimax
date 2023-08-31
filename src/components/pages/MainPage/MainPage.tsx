import React, { FC, ReactElement, useState } from 'react';

type MainPageProps = {
  children: ReactElement | ReactElement[];
};

export const MainPage: FC = () => {
  const [page, setPage] = useState(2);

  const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

  return (
    <div>
      <div></div>
    </div>
  );
};
