import { useDispatch } from "react-redux";
import { useEffect } from "react";

import MainLayout from './layouts/MainLayout'
import Restaurants from './features/restaurants/Restaurants';
import ScrollProgressBarForDocument from './shared/scroll-progress-bar/ScrollProgressBarForDocument';
import { getRestaurants } from "./redux/entities/restaurant/thunk/get-restaurants";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <>
        <ScrollProgressBarForDocument />
        <MainLayout>
        <main className="preview">
            <div className="preview__box">
                <Restaurants />
            </div>
        </main>
        </MainLayout>
    </>
  );
};