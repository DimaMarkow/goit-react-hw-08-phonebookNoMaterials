import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from 'components/Loader/Loader';
import css from 'components/SharedLayout/SharedLayout.module.css';

import Navbar from 'components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ fontSize: 15 }}
      />
    </div>
  );
};

export default SharedLayout;
